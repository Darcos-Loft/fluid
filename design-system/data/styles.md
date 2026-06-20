# Style database

Aesthetic directions, each with its token tendencies: surface language, radii, motion feel, and when to reach for it. Pick one direction per project and hold it. Pair with a palette (`palettes.md`) and a type pairing (`type-pairings.md`).

Format: name — when. surface · radii · motion · signature.

## Restraint-led
- **Swiss editorial** — content-first, publishing, agencies. surface flat, hairline separators · radii sharp (2 to 8px) · motion minimal, fast reveals · signature: a strong type scale, generous whitespace, one accent, grid discipline. Pair with a serif display + grotesk body.
- **Minimal product** — clean SaaS, tools. surface flat or soft · radii 8 to 12px · motion subtle, ease-out · signature: near-monochrome + one accent, restraint, clarity over decoration.
- **Quiet luxury** — premium brands, boutique. surface soft shadow · radii 4 to 14px · motion slow, considered · signature: a metallic hairline, a serif, lots of air, muted tuned neutrals, never loud.

## Material / depth-led
- **Liquid glass** — Apple-grade apps, premium dark. surface translucent glass (`backdrop-filter` blur + saturate + inner sheen, see `glass.md`) over a colored halo · radii 16 to 24px · motion fluid springs, floating · signature: light makes the depth, not borders. Earn it with the brand; do not use everywhere.
- **Soft elevation** — friendly apps, dashboards. surface solid cards + soft shadow (`0 4px 18px rgba(0,0,0,.12)`) · radii 14 to 22px · motion spring micro-interactions · signature: gentle depth, rounded, tactile.
- **Glossy dimensional** — playful, gaming, kids. surface rich gradients + highlights · radii 18 to 28px · motion bouncy springs (rationed) · signature: 3D-ish icons, vivid, delight. Keep typography clean to balance.

## Structure / raw-led
- **Brutalist** — statements, raw, anti-template. surface flat, hard 1px borders · radii 0 to 4px · motion abrupt or none, linear · signature: stark contrast, a heavy or mono type, hi-vis accent, visible grid, no soft edges.
- **Industrial / utility** — B2B, engineering, data. surface flat, functional · radii 4 to 8px · motion functional, fast · signature: dense information allowed, safety-color accent, tabular numbers, no flourish.
- **Geometric / Bauhaus** — bold agencies, posters. surface flat, blocks of color · radii 0 to 8px · motion sharp, staggered · signature: primary colors, circles/squares/triangles, asymmetry.

## Warm / organic-led
- **Organic editorial** — wellness, food, craft, architecture. surface flat with stone/paper warmth · radii 6 to 16px · motion soft, slow · signature: warm neutrals, earthy accent, real photography over illustration, generous margins.
- **Warm minimal** — calm consumer, beauty. surface soft, low contrast · radii 12 to 20px · motion gentle · signature: cream/blush neutrals, one warm accent, soft and inviting.

## Dark / premium-led
- **Dark gold (lacquer)** — premium nocturnal, fintech, luxury. surface near-black + a metallic accent + subtle texture · radii 10 to 18px · motion smooth, restrained · signature: gold or amber on tuned near-black, champagne text, a sense of weight.
- **Dark techy** — dev tools, infra, crypto. surface near-black + a single vivid cool accent · radii 8 to 14px · motion precise, fast · signature: mono labels, glowing accent rationed, terminal-adjacent confidence (never neon-everything).

## Expressive / statement-led
- **Editorial maximalism** — bold brand, fashion, culture. surface flat, layered type and image · radii 0 to 8px · motion staggered expressive reveals · signature: huge mixed-size headlines, overlap, a strong point of view, image-led. The disciplined opposite of slop: maximal but intentional.
- **Retro-futurism / Y2K** — nostalgic tech, music, youth. surface chrome and gradient highlights · radii 8 to 20px · motion glossy, rationed · signature: chrome type, holographic accent, mono or pixel cues. Keep one nostalgic move, not all of them.
- **Art deco / geometric luxe** — heritage glam, spirits, events. surface flat with metallic linework · radii 0 to 8px · motion elegant, slow · signature: symmetry, gold hairline motifs (fans, sunbursts), high contrast, a display serif.
- **Organic blob / soft shapes** — friendly modern, consumer, kids-adjacent. surface flat with blob masks and soft shapes · radii organic · motion gentle morphing · signature: rounded organic forms, a soft committed palette, approachable without being childish.

## Material / depth-led (more)
- **Aurora / gradient mesh** — modern hero, AI, music, done right. surface a soft drifting mesh-gradient halo behind flat, legible content · radii 12 to 20px · motion slow drifting blobs (reduced-motion freezes them) · signature: an ambient colored field is the only flourish; content stays flat and readable. Commit to a non-purple palette so it does not read as default AI.
- **Claymorphism** — playful apps, kids, games. surface inflated soft inner and outer shadows · radii 20 to 32px · motion bouncy but gentle · signature: puffy pastel shapes, tactile, delight. Keep type clean to balance.
- **Neumorphism** — accents only, never whole UI. surface same-color extruded soft shadows · radii 14 to 24px · motion subtle · signature: monochrome tactile. Warning: low contrast by nature, fails accessibility for text and primary controls; use for a toggle or a card detail, not the interface.

## Structure / raw-led (more)
- **Neo-brutalist** — playful-bold brands, indie products. surface flat with hard offset shadows (`4px 4px 0`) · radii 0 to 6px · motion snappy, no fancy easing · signature: thick black borders, bright flat fills, sticker energy. Brutalist's fun cousin, not its austere one.
- **Editorial grid / magazine** — publishing, portfolios, agencies. surface flat with visible columns and hairline rules · radii 0 to 6px · motion minimal · signature: multi-column layout, captions, asymmetric balance, a strong baseline grid.
- **Monospace / technical** — dev tools, data, security. surface flat with grid lines · radii 2 to 8px · motion precise and fast · signature: a mono display or labels, tabular numbers, terminal cues, color rationed hard.

## Dark / premium-led (more)
- **Cinematic dark** — entertainment, media, film, launches. surface deep dark with full-bleed imagery · radii 8 to 16px · motion smooth fades, parallax rationed · signature: media bleeds edge to edge, dramatic contrast, light comes from the content, UI recedes.

## Accessibility-led
- **High-contrast clear** — civic, gov, healthcare, a11y-first brands. surface flat with strong borders · radii 6 to 12px · motion minimal, reduced-motion as the baseline · signature: AAA contrast, large hit targets, an unmissable focus ring, no ambiguity. Constraint as an aesthetic, and the safest default when the audience is broad.

## Picking and holding
- One surface language, one radii scale, one accent across the whole system. No mid-page shifts.
- The style sets the tendencies; the palette and type pairing make it specific. Two clients can share a style but must differ in palette and type.
- Glass and glossy are expensive in attention and GPU. Default to flat or soft unless the brand earns more.
