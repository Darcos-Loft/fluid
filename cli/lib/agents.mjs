// The agents fluid-skills can install into, keyed by the marker folder each one
// keeps in a project. Install copies the skill folders into <marker>/skills.

import { existsSync } from "node:fs";
import { join } from "node:path";

export const AGENTS = [
  { id: "claude", name: "Claude Code", marker: ".claude", dest: ".claude/skills" },
  { id: "cursor", name: "Cursor", marker: ".cursor", dest: ".cursor/skills" },
  { id: "copilot", name: "GitHub Copilot", marker: ".github", dest: ".github/skills" },
  { id: "codex", name: "Codex", marker: ".codex", dest: ".codex/skills" },
  { id: "gemini", name: "Gemini CLI", marker: ".gemini", dest: ".gemini/skills" },
  { id: "windsurf", name: "Windsurf", marker: ".windsurf", dest: ".windsurf/skills" },
  { id: "opencode", name: "OpenCode", marker: ".opencode", dest: ".opencode/skills" },
];

export const SKILLS = ["fluid", "design-system", "redesign", "brandkit", "refine", "output"];

export const detectAgents = (cwd) => AGENTS.filter((a) => existsSync(join(cwd, a.marker)));
export const findAgent = (id) => AGENTS.find((a) => a.id === id);
