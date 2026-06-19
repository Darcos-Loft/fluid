# fluid detector

A deterministic, dependency-free scanner for the anti-patterns in `../reference/anti-patterns.md`. No API calls: it greps source for motion and generic-look smells, with line numbers, severity, and a fix hint. This is the fast, measurable, anti-generic guardrail.

## Run

```bash
node detect.mjs <paths...>          # scan files or folders
node detect.mjs src                 # a folder
node detect.mjs --json src          # machine output for CI
node detect.mjs --strict src        # exit 1 on warnings too
node detect.mjs --include-ui src    # also scan components/ui (shadcn)
```

Works with `bun detect.mjs` as well. Exit code is 1 when an `error` is found (or any `warn` under `--strict`), so it can gate CI or feed a Claude Code / Codex hook.

## What it flags

Motion: `transition: all`, animating layout properties, `ease-in` on enters/exits, `scale(0)`, durations over 600ms, dated negative-control bounce eases. Plus a project-level check for a missing `prefers-reduced-motion` path.

Generic look: generic fonts (Inter/Roboto/Arial), the cliche purple gradient, pure black, emoji used as icons, Aceternity/Magic UI/21st template signatures shipped verbatim, and Space Grotesk overuse.

## Tune it

- Inline: put `fluid-disable-next-line` or `fluid-disable-line` (optionally with a rule id) in a comment.
- Project: a `fluid.config.json` with `{ "ignore": ["substring"], "disabledRules": ["rule-id"] }`.
- Rules live in `rules.mjs` as a plain array. Add one with an `id`, `severity`, a `pattern` (global regex) or `scan` function, a `message` and a `hint`. That array is the seed of our growing house ruleset.

Severities: `error` (ship-blocker), `warn` (fix before delivery), `info` (taste nudge). Most generic-look tells are `warn`, taste nudges are `info`.
