#!/usr/bin/env node
// fluid detector: a deterministic, dependency-free scanner for motion and
// generic-look anti-patterns. Run with `node detect.mjs [paths...]` or `bun`.
//   --json          machine output for CI
//   --strict        exit 1 on warnings too (default: only on errors)
//   --include-ui    also scan components/ui (shadcn) folders
// Suppress inline with `fluid-disable-line [rule]` or `fluid-disable-next-line [rule]`.
// Optional config: fluid.config.json { "ignore": [...], "disabledRules": [...] }.

import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, sep, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { rules, projectRules } from "./rules.mjs";

const CODE_EXT = /\.(css|scss|sass|less|html|htm|jsx|tsx|js|ts|mjs|cjs|vue|svelte|astro)$/i;

const argv = process.argv.slice(2);
const flags = new Set(argv.filter((a) => a.startsWith("--")));
const roots = argv.filter((a) => !a.startsWith("--"));
if (!roots.length) roots.push(".");
const asJson = flags.has("--json");
const strict = flags.has("--strict");
const includeUi = flags.has("--include-ui");

let config = { ignore: [], disabledRules: [] };
if (existsSync("fluid.config.json")) {
  try { config = { ...config, ...JSON.parse(readFileSync("fluid.config.json", "utf8")) }; } catch { /* ignore bad config */ }
}

const selfDir = dirname(fileURLToPath(import.meta.url)).split(sep).join("/");
const IGNORES = ["node_modules", "/.git/", "/dist/", "/build/", "/.next/", "/.tanstack/", "/.vercel/", "/.claude/", ".min.", selfDir, ...config.ignore];
if (!includeUi) IGNORES.push("/components/ui/", "/ui/");
const SKIP_DIRS = new Set(["node_modules", ".git", "dist", "build", ".next", ".tanstack", ".vercel", ".claude"]);

const ignored = (p) => { const u = p.split(sep).join("/"); return IGNORES.some((ig) => u.includes(ig)); };

function walk(root, acc) {
  let st;
  try { st = statSync(root); } catch { return; }
  if (st.isFile()) { if (CODE_EXT.test(root) && !ignored(root)) acc.push(root); return; }
  if (st.isDirectory()) for (const name of readdirSync(root)) { if (SKIP_DIRS.has(name)) continue; walk(join(root, name), acc); }
}

const files = [];
for (const r of roots) walk(r, files);

function lineIndexer(content) {
  const starts = [0];
  for (let i = 0; i < content.length; i++) if (content[i] === "\n") starts.push(i + 1);
  return (idx) => {
    let lo = 0, hi = starts.length - 1;
    while (lo < hi) { const mid = (lo + hi + 1) >> 1; if (starts[mid] <= idx) lo = mid; else hi = mid - 1; }
    return { line: lo + 1, col: idx - starts[lo] + 1 };
  };
}

const disabled = new Set(config.disabledRules);
const findings = [];
const fileData = [];

for (const file of files) {
  let content;
  try { content = readFileSync(file, "utf8"); } catch { continue; }
  fileData.push({ file, content });
  const lines = content.split("\n");
  const at = lineIndexer(content);

  const suppressed = (line, id) => {
    const match = (s, kind) => {
      if (!s) return false;
      const m = s.match(new RegExp(`fluid-disable-${kind}\\s*([\\w-]*)`));
      return m ? !m[1] || m[1] === id : false;
    };
    return match(lines[line - 2], "next-line") || match(lines[line - 1], "line");
  };

  for (const rule of rules) {
    if (disabled.has(rule.id)) continue;
    if (rule.files && !rule.files.test(file)) continue;
    const hits = [];
    if (rule.pattern) for (const m of content.matchAll(rule.pattern)) hits.push({ index: m.index, message: rule.message });
    if (rule.scan) for (const h of rule.scan(content, file)) hits.push({ index: h.index, message: h.message || rule.message });
    for (const h of hits) {
      const { line, col } = at(h.index);
      if (suppressed(line, rule.id)) continue;
      findings.push({ file, line, col, id: rule.id, severity: rule.severity, message: h.message, hint: rule.hint });
    }
  }
}

for (const pr of projectRules) {
  if (disabled.has(pr.id)) continue;
  for (const f of pr.test(fileData)) findings.push({ file: f.file, line: f.line, col: 1, id: pr.id, severity: pr.severity, message: f.message, hint: f.hint || pr.hint });
}

findings.sort((a, b) => (a.file === b.file ? a.line - b.line : a.file < b.file ? -1 : 1));
const counts = { error: 0, warn: 0, info: 0 };
for (const f of findings) counts[f.severity]++;

if (asJson) {
  process.stdout.write(JSON.stringify({ files: files.length, counts, findings }, null, 2) + "\n");
} else {
  const tag = { error: "error", warn: "warn ", info: "info " };
  if (!findings.length) {
    console.log(`fluid · no anti-patterns found across ${files.length} files.`);
  } else {
    let cur = null;
    for (const f of findings) {
      if (f.file !== cur) { cur = f.file; console.log("\n" + f.file); }
      console.log(`  ${String(f.line).padStart(4)}:${String(f.col).padEnd(3)} ${tag[f.severity]}  ${f.id.padEnd(24)} ${f.message}`);
      if (f.hint) console.log(`        ↳ ${f.hint}`);
    }
    console.log(`\n${findings.length} findings  (${counts.error} error, ${counts.warn} warn, ${counts.info} info)  in ${files.length} files`);
  }
}

process.exitCode = counts.error > 0 || (strict && counts.warn > 0) ? 1 : 0;
