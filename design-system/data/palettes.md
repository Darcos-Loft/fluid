# Palette database

A curated set of committed palettes. Each is one dominant brand hue + one sharp accent (rationed), an optional metallic, and tuned neutrals (a warm or cool paper for light, a tuned near-black for dark, never `#000`). Pick one that fits the brief, then adapt the exact values. None are generic SaaS-blue or AI-purple.

How to read: `dominant` carries the identity (CTA, links, focus). `accent` pops against it, used sparingly. `metallic` is a thin premium detail (hairlines, marks), never a large fill. From `paper` and `near-black` you derive `--bg-base`, `--surface`, `--text` per `color.md`.

## Fintech, crypto, money
- **Sound orange** (digital gold, sovereign): dominant `#f7931a`, accent `#2bd4a8`, metallic `#e8b65a`. paper `#f7f5f0`, near-black `#0b0b0e`. Why: warm conviction, mint reads "confirmed".
- **Calm aqua** (neobank, trust): dominant `#0aa6b8`, accent `#ff7a45`, metallic none. paper `#f4f7f8`, near-black `#06121f`. Why: water-calm money, warm CTA.
- **Midnight ledger** (self-custody, quiet): dominant `#3da9fc`, accent `#5fe0b8`, metallic `#cbb88a`. paper `#eef2f6`, near-black `#0a0f24`. Why: deep-night security, green = settled.
- **Vault green** (wealth, stability): dominant `#1f7a52`, accent `#e7b84b`, metallic `#caa24a`. paper `#f3f1ea`, near-black `#0c130f`. Why: evergreen money, gold restraint.

## Luxury, fashion, hospitality
- **Oxblood** (heritage, wine, leather): dominant `#7a1f2b`, accent `#d9a441`, metallic `#caa24a`. paper `#f2ece2`, near-black `#150b0c`. Why: deep red gravitas, gold seam.
- **Noir gold** (couture, dark luxury): dominant `#c8a96a` (used as gold accent on near-black), accent `#c8a96a`, metallic `#c8a96a`. paper `#ede7dc`, near-black `#0b0b0d`. Why: monochrome dark, gold is the whole voice. Sans 300, wide tracking.
- **Champagne burgundy** (boutique hotel): dominant `#5c1a2e`, accent `#caa583`, metallic `#caa583`. paper `#f4efe6`, near-black `#160d10`. Why: quiet-luxury venue, warm neutrals.
- **Blush rose** (beauty, modern feminine): dominant `#b03a5b`, accent `#1f3b4d`, metallic `#caa24a`. paper `#fbf2f1`, near-black `#1c0f14`. Why: rose with a navy anchor, not pink-on-pink.
- **Pine prestige** (sustainable luxury): dominant `#1a3a2a`, accent `#cda349`, metallic `#cda349`. paper `#f1efe6`, near-black `#0a120d`. Why: forest depth, gold thread.

## Editorial, publishing, culture
- **Ink vermilion** (magazine, opinion): dominant `#1c1a17`, accent `#d8462a`, metallic none. paper `#f4f1ea`, near-black `#14110d`. Why: near-black text, one hot red. Serif display.
- **Stone clay** (slow journalism, craft): dominant `#a8492f`, accent `#7fa66a`, metallic none. paper `#f3efe6`, near-black `#1c1b19`. Why: terracotta + sage, warm and considered.
- **Cobalt paper** (design weekly, sharp): dominant `#1b3bdb`, accent `#f5d000`, metallic none. paper `#f6f5f2`, near-black `#0c1024`. Why: primary blue + lemon, Swiss energy.
- **Spectral plum** (essays, literary): dominant `#3a1f3d`, accent `#d98a4e`, metallic `#caa24a`. paper `#f4f0ea`, near-black `#160d17`. Why: aubergine restraint, warm apricot lift.

## SaaS, data, dev tools
- **Graphite cyan** (analytics, calm SaaS): dominant `#4f8cff`, accent `#22d3ee`, metallic none. paper `#f4f7fb`, near-black `#0e1422`. Why: blue + cyan, cool and precise, no purple.
- **Terminal lime** (dev tool, CLI): dominant `#c6f24e`, accent `#7aa2ff`, metallic none. paper `#f3f4ee`, near-black `#0a0a0b`. Why: electric lime, builder energy, rationed.
- **Slate ember** (infra, B2B): dominant `#33415c`, accent `#ff6b3d`, metallic none. paper `#f4f5f7`, near-black `#0e131c`. Why: steel structure, warm action.
- **Vault dark** (secrets, security): dominant `#238636`, accent `#3fb950`, metallic none. paper `#eef2ee`, near-black `#0d1117`. Why: GitHub-green confidence on near-black.

## Health, wellness, science
- **Teal coral** (healthtech, human): dominant `#0f766e`, accent `#ff6b5e`, metallic none. paper `#f1f6f5`, near-black `#08201c`. Why: clinical teal warmed by coral.
- **Sage mineral** (wellness, calm): dominant `#5a6b3b`, accent `#c98a3a`, metallic none. paper `#f4f3ea`, near-black `#141710`. Why: olive + amber, grounded and natural.
- **Cool mint** (pharma, clean): dominant `#1f9d8f`, accent `#3a5bdb`, metallic none. paper `#f2f8f6`, near-black `#0a1714`. Why: trustworthy mint, indigo for emphasis.

## Industrial, B2B, architecture, real estate
- **Trade graphite** (industrial B2B): dominant `#2b2f36`, accent `#f7931a`, metallic none. paper `#f4f4f2`, near-black `#0e0f12`. Why: heavy neutral, safety-orange action.
- **Architect sand** (studio, structural): dominant `#b89b72`, accent `#1c1a17`, metallic none. paper `#f1ede4`, near-black `#15130f`. Why: stone + ink, restraint and grid.
- **Steel safety** (engineering, machinery): dominant `#5b6b7a`, accent `#ffd400`, metallic none. paper `#f2f3f4`, near-black `#12161a`. Why: steel + hi-vis yellow, function-first.
- **Maroon mustard** (heritage trade, craft): dominant `#6b1f2e`, accent `#d9a441`, metallic `#caa24a`. paper `#f3eee4`, near-black `#160c0f`. Why: old-house red, mustard warmth.

## Food, hospitality, agriculture
- **Olive rust** (farm-to-table, food): dominant `#5a6b3b`, accent `#b5532a`, metallic none. paper `#f5f1e7`, near-black `#13160e`. Why: field olive, rust accent, appetite-warm.
- **Ferment amber** (slow kitchen, craft food): dominant `#d99a4e`, accent `#7fa66a`, metallic none. paper `#f4ede0`, near-black `#1a1614`. Why: warm amber, herb-green pop.
- **Mediterranean clay** (travel, coastal): dominant `#c1502e`, accent `#0b6e6e`, metallic none. paper `#f4ede2`, near-black `#1a100c`. Why: terracotta + sea-teal, sun-warm.

## Creative, agency, music, youth
- **Bauhaus trio** (agency, bold): dominant `#1b3bdb`, accent `#e4342c`, metallic `#f5d000`. paper `#f5f3ee`, near-black `#101216`. Why: primary red/blue/yellow, geometric confidence.
- **Indigo peach** (creative studio): dominant `#1e2a78`, accent `#ff9e7a`, metallic none. paper `#f3f1ec`, near-black `#0c1030`. Why: deep indigo, soft peach lift.
- **Royal magenta** (music, nightlife): dominant `#2747c9`, accent `#ff4d8d`, metallic none. paper `#f4f3f6`, near-black `#0a0b1f`. Why: electric blue + hot pink, never the crypto-purple.
- **Concrete hi-vis** (brutalist, raw): dominant `#111111` (near-black as dominant), accent `#ffe600`, metallic none. paper `#e9e7e2`, near-black `#0d0d0d`. Why: stark concrete + safety yellow, no soft edges.

## Minimal / configurable
- **Mono accent** (minimalist, any sector): dominant `{pick one vivid hue}`, accent same hue lighter, metallic none. paper `#f5f3ee`, near-black `#0a0a0b`. Why: near-monochrome, one committed hue, maximum restraint.
- **Warm paper ink** (timeless, editorial-neutral): dominant `#1c1a17`, accent `{one warm hue}`, metallic none. paper `#f4f1ea`, near-black `#14110d`. Why: paper + ink + a single warm signal.

## Rules when picking
- One dominant, one accent. If you add a metallic or a third, keep it subordinate (hairlines, marks).
- Never pure black on text/surface, never the purple-on-white gradient.
- Verify contrast 4.5:1 for body text in both light and dark (see `color.md`).
- Two clients in the same sector must not get the same palette. Vary the dominant or the accent.
