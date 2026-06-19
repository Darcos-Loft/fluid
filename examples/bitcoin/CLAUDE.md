# Design System — Bitcoin · Brand rules for generating UI

> This file is the **brand context**. When asked to create a UI, page, component, or mockup
> for Bitcoin, apply these rules STRICTLY. Use the CSS variables from `tokens.css`. Pair with
> the `fluid` skill for motion.

## Identity
- **Subject**: Bitcoin — sound money, digital gold, the hardest money.
- **Personality**: precise, sovereign, premium. Engineering rigor meets a goldsmith's restraint.
- **Surface language**: soft on light, optional orange-halo glass on dark.
- **Mode**: light + dark auto, dark is the hero.
- **Stance**: NOT crypto-bro. No purple gradients, no neon, no casino. Digital gold, not Las Vegas.

## Golden rules (always)
1. **Action color = `#f7931a`** (`--brand`): CTAs, links, focus, the ₿ mark.
2. **Accent `#2bd4a8`** (`--accent`) = "confirmed / on-chain", rationed. **Gold `#e8b65a`** (`--gold`) as a metallic hairline/detail only, never a large fill.
3. **Text** via `--text` / `--text-secondary`. Never pure black `#000` (warm near-black).
4. **Backgrounds** via `--bg-base` / `--surface`. Dark = `#0b0b0e`, light = warm paper `#f7f5f0`.
5. **Display = Cabinet Grotesk**, **body/UI = Satoshi**, **numbers/addresses/hashes = JetBrains Mono** (`.num`, tabular). Nothing else.
6. **Spacing = multiples of 8** (`--space-*`).
7. **Radii**: `--radius-control` (8px), `--radius-card` (14px), pill, full. Tight and precise.
8. **Every color/space/radius/shadow is a `var(--token)`**. No raw hex on text or surface.
9. **Container** centered, `--container-max` (1240px).
10. **Bespoke SVG icons, zero emoji.** The ₿ and typographic glyphs (● → ✓) are allowed.

## Signature touches
- Any number (price, balance, block height, sats, address, hash) goes in `.num` (mono + tabular). This IS the Bitcoin look.
- The ₿ mark is gold (`.btc-mark`). Use it sparingly, like a maker's stamp.
- "Confirmed" states use the mint accent, "pending/mempool" uses warning amber.

## Motion (defer to the fluid skill)
- Easings from tokens: `--ease-out`, `--spring`, `--ease-in-out`. Never `linear` (except marquees).
- Under 300ms for UI, transform/opacity only.
- Reduced motion at two levels: the CSS guard in `tokens.css` AND a JS guard (`useReducedMotion()` / `<MotionConfig reducedMotion="user">`).
- Global `:focus-visible` ring is in `tokens.css`.

## How to produce
- **HTML/CSS**: import `tokens.css`, use variables + base classes `.btn`, `.btn--primary`, `.card`, `.badge--confirmed`, `.num`, `.container`, `.section`.
- **Tailwind**: use `tailwind.config.js`.
- Self-host the three fonts (Cabinet Grotesk + Satoshi via Fontshare, JetBrains Mono).
- Prefer: dark hero, big Cabinet Grotesk headline, a large mono number, the orange CTA, the gold ₿ as a stamp, airy precise layout.
- Avoid: purple gradients, neon, emoji, pure black, generic fonts, gold used as a big fill.
