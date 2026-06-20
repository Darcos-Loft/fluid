#!/usr/bin/env node
// fluid-skills CLI entry point. Dispatches to detect / install / hooks.

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { c, log } from "./lib/ui.mjs";
import { detect } from "./commands/detect.mjs";
import { install } from "./commands/install.mjs";
import { hooks } from "./commands/hooks.mjs";

const pkgRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const pkg = JSON.parse(readFileSync(join(pkgRoot, "package.json"), "utf8"));

const [cmd, ...rest] = process.argv.slice(2);

function help() {
  log(`
${c.bold(c.aqua("fluid-skills"))} ${c.dim("v" + pkg.version)}  ${c.dim("· anti-generic design skills + detector for AI agents")}

${c.bold("Usage")}
  npx fluid-skills <command> [options]

${c.bold("Commands")}
  ${c.aqua("install")} [--agent <id>]   Install the 6 skills into your agent (auto-detects Claude, Cursor, Copilot, Codex, Gemini, Windsurf, OpenCode)
  ${c.aqua("detect")}  [paths...]       Lint code for motion and generic-look anti-patterns
  ${c.aqua("hooks")}                    Run the detector on every edit (Claude Code)

${c.bold("detect options")}
  --deep         add the jsdom DOM pass (heading order, nested cards, contrast, line length)
  --strict       exit 1 on warnings too (CI)
  --json         machine-readable output
  --include-ui   also scan components/ui

${c.bold("Examples")}
  npx fluid-skills install
  npx fluid-skills detect ./src --deep
  npx fluid-skills detect . --strict --json
`);
}

const code = await (async () => {
  switch (cmd) {
    case "detect": return await detect(rest);
    case "install": return await install(rest);
    case "hooks": return await hooks(rest);
    case "version": case "--version": case "-v": log(pkg.version); return 0;
    case "help": case "--help": case "-h": case undefined: help(); return 0;
    default: log(c.red(`Unknown command "${cmd}".`)); help(); return 1;
  }
})();

process.exit(code || 0);
