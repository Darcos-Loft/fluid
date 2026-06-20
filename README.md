# fluid

**Agent skills that build distinctive, production-grade web interfaces, the opposite of generic AI slop.**

![License: MIT](https://img.shields.io/badge/license-MIT-5ad1c8) ![6 skills](https://img.shields.io/badge/skills-6-7aa2ff) ![Detector: 22 rules](https://img.shields.io/badge/detector-22%20rules-7aa2ff) ![Database: 108 palettes](https://img.shields.io/badge/database-108%20palettes-5ad1c8)

An AI can scaffold a UI in seconds, but it converges on the same look: Inter, a purple gradient, default shadcn, bouncy easings, pure black. `fluid` pushes the other way. It gives an agent a committed identity, a signature motion language, and a deterministic guardrail, so the work ships looking like a studio made it, not a template.

The rules and components are distilled from real production work, not from a starter kit.

## Quick start

```bash
npx skills add Darcos-Loft/fluid
```

Then tell your agent what to build. It loads the right skill on its own: `design-system` to set an identity, `fluid` for motion, the detector to check itself before calling anything done.

## Why fluid

Generic output is not a taste problem, it is a convergence problem. Every model reaches for the same safe defaults, so every site lands in the same place. Fixing it after the fact is slow and never quite works.

`fluid` fixes it at the source:

- **A unique identity per project.** `design-system` commits to one palette, one type pairing, one style direction, one page shape, picked from a large curated database before it improvises. Same house DNA, different result every time.
- **Motion that feels intentional.** `fluid` is a house motion language: when to animate, which easing, how long, where the spring goes, and the reduced-motion path shipped in the same change.
- **A guardrail that does not rely on taste.** The detector greps the code for the tells of generic work and flags them with a line number and a fix. It runs with zero dependencies and zero API calls, so it can gate CI.

## The six skills

| Skill | What it does |
|---|---|
| **`design-system`** | The identity factory. From a short brief it generates a unique design system in the house DNA: tokens, a Tailwind config, a brand rules doc the agent obeys, a storybook, a spec. Picks from the database first, then commits. |
| **`fluid`** | The motion language. Easing map, durations, springs, origins, reduced-motion, plus a drop-in React component library (`SmoothScroll`, `ScrollProgress`, `Reveal`, `Odometer`, `AmbientField`, `Marquee`) and the detector. |
| **`redesign`** | Audit an existing site and ship a fresh identity, preserving content, routes, and SEO. Pairs with `design-system` and the detector. |
| **`brandkit`** | Generate premium reference imagery (logo concepts, palette and type boards, product mockups) for a brand. Works with any image model. |
| **`refine`** | The verb layer. A vocabulary of named moves you run on UI that already exists (`typeset`, `colorize`, `animate`, `settle`, `glass`, `deslop`, `brandward`, `polish`, and more). "Make it better" becomes precise and repeatable. |
| **`output`** | The last gate before shipping: no placeholders, every interactive state handled, the brief honestly met. |

## The database

`design-system` does not improvise an identity from a blank page. It picks from a curated database first, the same way a studio reaches for a known-good combination, then commits to one per project. The DNA stays constant, the output varies.

| Library | Count | What it holds |
|---|--:|---|
| Palettes | **108** | committed color systems across 20+ sectors and moods |
| Type pairings | **57** | distinctive display + text + mono combinations |
| Style directions | **53** | neo-brutalist, aurora mesh, claymorphism, editorial maximalism, cinematic dark, high-contrast a11y, and more |
| Page layouts | **14** | page-shape archetypes, so pages vary their silhouette instead of converging on split-hero-plus-three-cards |
| Chart types | **32** | which chart for which question, with house data-viz defaults |
| Tech stacks | **10** | one committed build stack per project type, wired to the tokens |

Plus a motion-preset library in the house easings. The lesson behind it: varying the palette is not enough, generated pages also share a *shape*, so the layout and stack are committed too.

## The detector

A deterministic, dependency-free scanner for the anti-patterns the rest of the suite teaches. No API calls: it greps source for motion and generic-look smells, with line numbers, severity, and a fix hint.

```bash
node fluid/detector/detect.mjs <path>            # audit a folder or file
node fluid/detector/detect.mjs --strict <path>   # exit 1 on warnings (CI)
node fluid/detector/detect.mjs --json <path>     # machine output
```

**22 rules** across two families:

- **Motion smells:** `transition: all`, animating layout properties, `ease-in` on enters, `scale(0)`, long durations, dated bounce eases, plus a project-level check for a missing `prefers-reduced-motion` path.
- **Generic-look tells:** Inter/Roboto/Arial as a primary font, the cliche purple gradient, pure black, emoji used as icons, template components (Aceternity/Magic UI/21st) shipped verbatim, Space Grotesk overuse, gradient text, justified body, tiny text, em-dash typography, crushed tracking, marketing buzzwords, numbered section markers, the hero eyebrow chip, oversized type.

Suppress a line with `fluid-disable-line`, configure with `fluid.config.json`. Rules live in `fluid/detector/rules.mjs` as a plain array, extend them as your house ruleset grows. Exit code is 1 on an error (or any warning under `--strict`), so it gates CI or feeds an editor hook.

## The pipeline

```
direction        the aesthetic point of view
design-system    a UNIQUE identity per project     <- kills the generic look at the source
fluid            signature motion
detector         a deterministic guardrail
```

## Works with everything

**Any agent.** It is a `SKILL.md` skill, so it loads in Claude Code, Cursor, Codex, GitHub Copilot, Gemini CLI, OpenCode, Windsurf, and any harness that reads the skills format.

**Any stack.** The design system is pure CSS variables (`tokens.css`), which work in React, Vue, Svelte, Astro, SvelteKit, or plain HTML, with a Tailwind config for Tailwind projects. The easing tokens are framework-agnostic CSS; the `fluid` components are React reference implementations, and the same principles (ease-out, spring damping and response, reduced-motion) translate to Vue, Svelte, SwiftUI, and Flutter. The detector scans CSS, SCSS, HTML, JSX/TSX, Vue, Svelte, and Astro.

## Install

The quick start above installs the whole suite. To add one skill at a time:

```bash
npx skills add Darcos-Loft/fluid -s design-system
npx skills add Darcos-Loft/fluid -s fluid
npx skills add Darcos-Loft/fluid -s redesign
npx skills add Darcos-Loft/fluid -s brandkit
npx skills add Darcos-Loft/fluid -s refine
npx skills add Darcos-Loft/fluid -s output
```

Or copy a skill folder straight into your agent's skills directory (`.claude/skills/`, `.cursor/`, etc).

## Example

`examples/bitcoin/` is a complete design system generated by `design-system`: orange `#f7931a` + mint + gold, Cabinet Grotesk + Satoshi + JetBrains Mono, dark-first. Open `storybook.html` to see it. It clears the detector with no errors or warnings.

## License

MIT, see [LICENSE](./LICENSE). By Paul Rolland (PLR Studio).
