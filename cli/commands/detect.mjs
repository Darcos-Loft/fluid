// `fluid-skills detect [paths...] [--deep --strict --json --include-ui]`
// Thin wrapper over the detector core so the CLI and the standalone script
// share one engine.

import { runDetect, render, loadConfig } from "../../fluid/detector/core.mjs";

export async function detect(args) {
  const flags = new Set(args.filter((a) => a.startsWith("--")));
  const roots = args.filter((a) => !a.startsWith("--"));
  if (!roots.length) roots.push(".");

  const config = loadConfig(".");
  const result = await runDetect(roots, {
    includeUi: flags.has("--include-ui"),
    deep: flags.has("--deep"),
    disabledRules: config.disabledRules,
    ignore: config.ignore,
  });

  if (result.deepError) console.error(`(--deep skipped: ${result.deepError.message})`);
  process.stdout.write(render(result.findings, result.fileCount, { json: flags.has("--json") }) + "\n");
  return result.counts.error > 0 || (flags.has("--strict") && result.counts.warn > 0) ? 1 : 0;
}
