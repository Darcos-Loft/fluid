#!/usr/bin/env node
// Invoked by the Claude Code PostToolUse hook (see `fluid-skills hooks`). Reads
// the hook payload from stdin, pulls the edited file path, runs the regex
// detector on just that file, and prints warnings/errors to stderr so they show
// up in the session. Never blocks (always exits 0).

import { runDetect, render } from "../fluid/detector/core.mjs";

let input = "";
for await (const chunk of process.stdin) input += chunk;

let path;
try {
  const j = JSON.parse(input || "{}");
  path = (j.tool_input && (j.tool_input.file_path || j.tool_input.path)) ||
         (j.tool_response && j.tool_response.filePath);
} catch { /* no payload */ }

if (!path || !/\.(css|scss|sass|less|html?|jsx|tsx|vue|svelte|astro)$/i.test(path)) process.exit(0);

try {
  // no-reduced-motion is a whole-project check; one edited file lacking a
  // reduced-motion path does not mean the project lacks one, so skip it here.
  const r = await runDetect([path], { deep: false, disabledRules: ["no-reduced-motion"] });
  const significant = r.findings.filter((f) => f.severity !== "info");
  if (significant.length) process.stderr.write("\nfluid detector:\n" + render(significant, r.fileCount, {}) + "\n");
} catch { /* never block an edit */ }

process.exit(0);
