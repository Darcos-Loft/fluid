# Changelog

## Unreleased
- New skills in the family: `redesign` (audit an existing site and modernize), `brandkit` (premium brand reference images), `refine` (a shared vocabulary of named refine commands), `output` (execution discipline, the last gate before shipping).
- refine: 20 named moves (`typeset`, `colorize`, `animate`, `settle`, `flow`, `bolder`, `quieter`, `distill`, `regroup`, `glass`, `iconify`, `deslop`, `brandward`, `productward`, `audit`, `critique`, `harden`, `polish`, `tone`, `recase`), each wired to an existing rule, palette/type database, the detector, or the output gate. `reference/commands.md` defines what each enforces and leaves alone.
- detector: expanded to 19 rules (`gradient-text`, `justified-text`, `tiny-text`, `em-dash`, `crushed-tracking`, `marketing-buzzword`), and documented the by-hand catalog of structural tells in `fluid/reference/anti-patterns.md`.
- design-system: database grown to rival the largest skills. `data/palettes.md` to 108 committed palettes across 20+ sectors and moods, `data/type-pairings.md` to 57 distinctive pairings. Two new database files: `data/motion-presets.md` (motion recipes in the house easings) and `data/chart-types.md` (which chart for which question, with house data-viz defaults). `data/styles.md` to 25 directions (neo-brutalist, aurora mesh, claymorphism, editorial maximalism, cinematic dark, high-contrast a11y, and more).
- design-system: a curated database the `init` picks from first, so it lands on precise, committed identities instead of improvising. `data/palettes.md`, `data/type-pairings.md`, `data/styles.md`.
- design-system: hard rules doc, `reference/rules.md` (the locks, hero discipline, layout honesty, and bans).
- design-system: liquid-glass and 3-tier icon recipes folded in from production (`reference/glass.md`, `reference/icons.md`).
- fluid: the detector flags bad motion, not the presence of motion. `transition: all` is a nudge (info), long durations only flag past 1200ms.
- fluid: philosophy reframed, frequent interactions stay instant, everything else gets to flow.
- detector: two fixes, fractional-second parsing and suppression via HTML-comment disables.
- Stated explicitly: works with any agent and any stack.

## 0.1.0
- Initial release: `fluid` (motion language, component library, deterministic detector) and `design-system` (identity factory).
- Example: a complete Bitcoin design system in `examples/bitcoin/`.
