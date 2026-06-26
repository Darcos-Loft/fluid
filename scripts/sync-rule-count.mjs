#!/usr/bin/env node
// Single source of truth for the advertised detector rule count: rules.mjs.
// Rewrites the count everywhere it appears in the docs, so adding a rule never
// leaves a stale number behind. Run it after changing detector/rules.mjs.
//
//   node scripts/sync-rule-count.mjs           rewrite the docs, print what changed
//   node scripts/sync-rule-count.mjs --check    exit 1 if any doc is out of date (CI)

import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { rules, projectRules } from "../fluid/detector/rules.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const check = process.argv.includes("--check");

const N = rules.length + projectRules.length; // total advertised count
const main = rules.length;                    // rules in the main array

// Targeted rewrites, scoped tightly so they only touch the count phrasing.
const targets = [
  ["README.md", [
    [/(\d+)-rule detector/g, `${N}-rule detector`],
    [/Detector: \d+ rules/g, `Detector: ${N} rules`],
    [/detector-\d+_rules/g, `detector-${N}_rules`],
    [/reached \d+ rules/g, `reached ${N} rules`],
    [/\*\*\d+ rules\*\*/g, `**${N} rules**`],
  ]],
  [".claude-plugin/marketplace.json", [
    [/a \d+-rule detector/g, `a ${N}-rule detector`],
  ]],
  ["refine/SKILL.md", [
    [/detector \(\d+ rules\)/g, `detector (${N} rules)`],
  ]],
  ["refine/reference/commands.md", [
    [/the \d+ rules' findings/g, `the ${N} rules' findings`],
  ]],
  ["fluid/detector/README.md", [
    [/the \d+ rules \(zero dependency\)/g, `the ${N} rules (zero dependency)`],
    [/\d+ in the main array/g, `${main} in the main array`],
  ]],
];

const changed = [];
for (const [rel, subs] of targets) {
  const path = join(root, rel);
  let src;
  try { src = readFileSync(path, "utf8"); } catch { continue; }
  const out = subs.reduce((s, [re, rep]) => s.replace(re, rep), src);
  if (out !== src) { changed.push(rel); if (!check) writeFileSync(path, out); }
}

if (check) {
  if (changed.length) { console.error(`detector count is ${N} but stale in: ${changed.join(", ")}`); process.exit(1); }
  console.log(`detector count ${N} is in sync.`);
} else {
  console.log(changed.length ? `synced detector count to ${N} in: ${changed.join(", ")}` : `already in sync at ${N}.`);
}
