// `fluid-skills install [--agent <id>]`
// Copies the six skill folders into the detected (or named) agent's skills
// directory. With no agent folder present, defaults to Claude Code.

import { cpSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { AGENTS, SKILLS, detectAgents, findAgent } from "../lib/agents.mjs";
import { c, log, getOpt } from "../lib/ui.mjs";

const pkgRoot = dirname(dirname(dirname(fileURLToPath(import.meta.url)))); // cli/commands/x -> repo root

export async function install(args) {
  const cwd = process.cwd();
  const agentArg = getOpt(args, "agent");

  let targets;
  if (agentArg) {
    const a = findAgent(agentArg);
    if (!a) { log(c.red(`Unknown agent "${agentArg}".`) + ` Known: ${AGENTS.map((x) => x.id).join(", ")}`); return 1; }
    targets = [a];
  } else {
    targets = detectAgents(cwd);
  }

  if (!targets.length) {
    log(c.dim("No agent folder found here, defaulting to Claude Code (.claude/skills)."));
    targets = [findAgent("claude")];
  }

  for (const a of targets) {
    const destRoot = join(cwd, a.dest);
    mkdirSync(destRoot, { recursive: true });
    let n = 0;
    for (const s of SKILLS) {
      const src = join(pkgRoot, s);
      if (existsSync(src)) { cpSync(src, join(destRoot, s), { recursive: true }); n++; }
    }
    log(`${c.green("✓")} installed ${n} skills into ${c.aqua(a.dest)}  ${c.dim("(" + a.name + ")")}`);
  }

  log(`\nDone. Open your agent and ask it to build or review a UI.`);
  log(`Lint on every edit with ${c.aqua("npx fluid-skills hooks")}.`);
  return 0;
}
