// `fluid-skills hooks`
// Wires the detector into Claude Code as a PostToolUse hook so it lints every
// Edit/Write automatically. Non-blocking: it surfaces warnings and errors as
// you go, it does not reject the write. Merges into .claude/settings.json
// without clobbering existing hooks.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { c, log } from "../lib/ui.mjs";

const pkgRoot = dirname(dirname(dirname(fileURLToPath(import.meta.url))));
const runner = join(pkgRoot, "cli", "hook-runner.mjs").split(sep).join("/");

export async function hooks() {
  const cwd = process.cwd();
  const dir = join(cwd, ".claude");
  const file = join(dir, "settings.json");
  mkdirSync(dir, { recursive: true });

  let settings = {};
  if (existsSync(file)) {
    try { settings = JSON.parse(readFileSync(file, "utf8")); }
    catch { log(c.red(".claude/settings.json is not valid JSON; leaving it untouched.")); return 1; }
  }

  settings.hooks = settings.hooks || {};
  const arr = (settings.hooks.PostToolUse = settings.hooks.PostToolUse || []);
  if (JSON.stringify(arr).includes("hook-runner.mjs")) {
    log("The fluid edit hook is already installed in .claude/settings.json.");
    return 0;
  }

  arr.push({
    matcher: "Edit|Write|MultiEdit",
    hooks: [{ type: "command", command: `node "${runner}"` }],
  });
  writeFileSync(file, JSON.stringify(settings, null, 2) + "\n");

  log(`${c.green("✓")} The fluid detector now runs on every Edit/Write in Claude Code.`);
  log(c.dim("  Added a PostToolUse hook to .claude/settings.json. Findings show as you edit, non-blocking."));
  return 0;
}
