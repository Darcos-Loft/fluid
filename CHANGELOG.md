# Changelog

## 0.3.1 (2026-06-22)
- detector: two new tells bring it to 23 rules. `glassmorphism-blur` flags the frosted-glass `backdrop-filter: blur()` look (and the Tailwind `backdrop-blur` utilities), the canonical recent AI tell. `gradient-text` now also catches the Tailwind `bg-clip-text` utility, not only the CSS `background-clip: text`.

## 0.3.0 (2026-06-20)
- **A CLI, `fluid-skills`, published to npm.** `npx fluid-skills install` detects the agents in a project (Claude Code, Cursor, Copilot, Codex, Gemini, Windsurf, OpenCode) and drops the six skills into each. `npx fluid-skills detect <path>` runs the detector with no clone. `npx fluid-skills hooks` wires the detector into Claude Code as a non-blocking edit hook, so slop tells surface as you write them.
- **Detector Tier 3, `--deep`.** An optional jsdom pass adds 6 DOM-aware rules the regex core cannot see: heading-order skips, multiple `h1`, cards nested in cards, repeated icon-tile feature grids, unbounded line length, and a best-effort contrast check on literal colors. The regex core stays zero-dependency; jsdom is loaded only when `--deep` is asked for. The detector core was extracted to `core.mjs` so the script and the CLI share one engine.

## 0.2.0 (2026-06-20)
- docs: a hero banner (`assets/banner.svg`) in the house aqua and periwinkle, a countable one-line pitch, two-tier badges, a "What's new" block, and a star-history chart. The README now reads as a maintained product, not a folder.
- docs: README rewritten around the suite as it stands now, quick start first, the six skills as a scan table, the database as a numbers table (108 palettes, 57 type pairings, 53 styles, 14 layouts, 32 chart types, 10 tech stacks), the 22-rule detector, badges.
- New skills in the family: `redesign` (audit an existing site and modernize), `brandkit` (premium brand reference images), `refine` (a shared vocabulary of named refine commands), `output` (execution discipline, the last gate before shipping).
- refine: 20 named moves (`typeset`, `colorize`, `animate`, `settle`, `flow`, `bolder`, `quieter`, `distill`, `regroup`, `glass`, `iconify`, `deslop`, `brandward`, `productward`, `audit`, `critique`, `harden`, `polish`, `tone`, `recase`), each wired to an existing rule, palette/type database, the detector, or the output gate. `reference/commands.md` defines what each enforces and leaves alone.
- detector: expanded to 22 rules. Added `gradient-text`, `justified-text`, `tiny-text`, `em-dash`, `crushed-tracking`, `marketing-buzzword`, then `numbered-section-markers`, `hero-eyebrow-chip`, `oversized-type` (regex-feasible layout and look tells). Documented the by-hand catalog of structural tells in `fluid/reference/anti-patterns.md`. Note: the contrast, nested-card, and icon-tile tells need a DOM pass and are out of scope for the zero-dependency regex core.
- design-system: database grown to rival the largest skills. `data/palettes.md` to 108 committed palettes across 20+ sectors and moods, `data/type-pairings.md` to 57 distinctive pairings, `data/styles.md` to 53 directions (neo-brutalist, aurora mesh, claymorphism, editorial maximalism, cinematic dark, high-contrast a11y, and more), `data/chart-types.md` to 32 chart types (which chart for which question, with house data-viz defaults). Two new database files: `data/motion-presets.md` (motion recipes in the house easings) and `data/tech-stacks.md` (10 committed build stacks, one per project type, wired to the tokens).
- design-system: new `data/layouts.md`, 14 page-shape archetypes the `init` picks from like a palette, so pages vary their silhouette instead of converging on the split-hero-plus-three-cards skeleton. The lesson: varying the palette is not enough, generated pages share a shape.
- design-system: a curated database the `init` picks from first, so it lands on precise, committed identities instead of improvising. `data/palettes.md`, `data/type-pairings.md`, `data/styles.md`, `data/layouts.md`.
- design-system: hard rules doc, `reference/rules.md` (the locks, hero discipline, layout honesty, and bans).
- design-system: liquid-glass and 3-tier icon recipes folded in from production (`reference/glass.md`, `reference/icons.md`).
- fluid: the detector flags bad motion, not the presence of motion. `transition: all` is a nudge (info), long durations only flag past 1200ms.
- fluid: philosophy reframed, frequent interactions stay instant, everything else gets to flow.
- detector: two fixes, fractional-second parsing and suppression via HTML-comment disables.
- Stated explicitly: works with any agent and any stack.

## 0.1.0
- Initial release: `fluid` (motion language, component library, deterministic detector) and `design-system` (identity factory).
- Example: a complete Bitcoin design system in `examples/bitcoin/`.
