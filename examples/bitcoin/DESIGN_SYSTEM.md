# Bitcoin — Design System

Style: **or numérique**, dark-first, précis, premium. Rigueur d'ingénieur, retenue d'orfèvre. Anti crypto-bro: zéro dégradé violet, zéro néon. Source de vérité = `tokens.css`.

## 1. Principes
- Dark-first (l'or numérique sur near-black), light en papier chaud. Tout via tokens CSS, jamais de hex en dur.
- Le chiffre est roi: prix, soldes, sats, adresses, hashs en **mono tabulaire** (`.num`). C'est la signature.
- Motion utile 150 à 300ms, ease-out / ressort, reduced-motion à 2 niveaux. Focus clavier visible (`:focus-visible` global).
- Icônes SVG dessinées main, zéro emoji. ₿ et glyphes typo (● → ✓) tolérés.

## 2. Couleurs
| Token | Valeur | Usage |
|---|---|---|
| `--brand` | `#f7931a` | orange Bitcoin: CTA, liens, focus, ₿ |
| `--accent` | `#2bd4a8` | menthe "confirmé / on-chain", rationné |
| `--gold` | `#e8b65a` | or métallique: filets, le mark. Jamais en aplat |
| `--success` / `--warning` / `--danger` | `#2bd4a8` / `#f7b500` / `#ff453a` | confirmé / mempool / échec |
| Near-black | `#0b0b0e` (dark) | fond héros |
| Papier chaud | `#f7f5f0` (light) | fond clair |

Texte: `--text` (near-black chaud / blanc cassé), jamais `#000`. Tints + on-tint pour les badges.

## 3. Typographie
- **Cabinet Grotesk** (titres) · **Satoshi** (corps/UI, clin d'œil à Satoshi Nakamoto) · **JetBrains Mono** (chiffres/adresses/hashs).
- Échelle `--fs-*` 12 → 64. Titres -0.02em, 700. Corps 16/1.5/400.

## 4. Forme & profondeur
- Rayons serrés: `--radius-control` 8px, `--radius-card` 14px, pill, full. Précision avant douceur.
- Ombres douces (`--shadow-card`). Verre optionnel sur dark (halo orange réfracté, `--glass-reflect`).

## 5. Motion
- `--ease-out: cubic-bezier(0.32,0.72,0,1)`, `--spring: cubic-bezier(0.34,1.3,0.4,1)`, `--ease-in-out`. Jamais linear (sauf marquee).

## 6. Composants
- `.btn` / `.btn--primary` (orange) / `.btn--outline` · `.card` (surface + bordure fine) · `.badge--confirmed` / `.badge--pending` · `.num` (mono tabulaire) · `.btc-mark` (₿ or) · `.container` / `.section`.

## 7. Voix
- "Don't trust, verify". "21 millions, jamais un de plus". Sobre, technique, sûr. Le chiffre parle.

## Fichiers
`tokens.css` · `tailwind.config.js` · `storybook.html` · `CLAUDE.md` · `DESIGN_SYSTEM.md`
