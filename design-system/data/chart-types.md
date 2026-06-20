# Chart and data-viz database

Which chart for which question, plus the house styling defaults so data visualisations carry the same identity as the rest of the system. The goal is honest, legible data, never decoration. Pick by the question the reader is asking, not by what looks impressive.

Format: `chart — use when. avoid when. house defaults.`

## Trend over time
- **Line** — a continuous value over time (revenue, users, price). avoid when: categories are unordered (use bar). house: 2px stroke in the accent, hairline gridlines in a 6% ink tint, dots only on hover, tabular mono axis labels, area fill optional at ~8% opacity.
- **Area** — a single trend where the magnitude matters, or one part of a whole over time. avoid when: more than 3 series overlap (they hide each other; switch to line). house: accent fill 10 to 16%, solid stroke on top, no hard gradient to transparent black.
- **Stacked area** — composition over time. avoid when: the reader needs exact per-series values (stacking distorts). house: 3 to 5 muted tints of the palette, never 8 rainbow bands; label series directly at the line end.
- **Sparkline** — a trend inline in a table or card, no axes. house: 1.5px accent stroke, ~32px tall, last point dotted, no labels; the number beside it carries the value.

## Comparison across categories
- **Bar (horizontal)** — comparing named categories, especially with long labels. avoid when: data is a time series. house: single accent fill, 4px bar radius on the outer end only, value labels at the bar end in mono, sorted by value not alphabetically.
- **Column (vertical)** — few categories or time buckets (months, quarters). avoid when: more than ~12 bars (gets cramped; go horizontal). house: same as bar, baseline at zero always, no truncated axis.
- **Grouped bar** — a category split by a second dimension (region by quarter). avoid when: more than 3 groups (clutter). house: the dominant plus the accent plus one neutral, a clear legend or direct labels.
- **Bullet** — a single metric against a target or range (KPI). house: a thin track in ink tint, the value bar in accent, a target tick, the number in mono above. Replaces the gauge.

## Part of a whole
- **Donut** — one share at a glance (a single percentage, occasionally up to 3 slices). avoid when: more than 3 to 4 slices, or precise comparison is needed (the eye is bad at arcs; use a bar). house: accent for the focal slice, ink tints for the rest, the headline number centered in mono, no legend if labelled.
- **Stacked bar (100%)** — composition compared across a few items. avoid when: many thin segments. house: 3 to 4 palette tints, direct percentage labels on segments wide enough.
- Avoid pie charts with many slices, exploded 3D pies, and anything that needs a legend the eye must hunt through.

## Distribution and relationship
- **Histogram** — the shape of one variable's distribution. house: accent bars, no gaps, a marker line for mean or median in the contrast accent.
- **Scatter** — relationship between two variables. avoid when: thousands of points overlap (add opacity or switch to a density/heatmap). house: dots at ~60% opacity so clusters read, accent for the highlighted series, a quiet trend line if it earns its place.
- **Heatmap** — density across two categories (cohort retention, activity by day and hour). house: a single-hue sequential ramp from paper to the dominant, never a red-green or rainbow ramp; label the axes, show the value on hover.

## Finance and ops
- **Candlestick / OHLC** — price action with open, high, low, close. house: up in the success green, down in the alert red or accent, tabular mono prices, a calm grid; never both axes truncated.
- **Waterfall** — how a total breaks down through positive and negative steps (P and L, budget). house: increases in accent, decreases in a muted contrast, connectors as hairlines.
- **Funnel** — stepwise drop-off (signup to paid). house: horizontal bars descending, the conversion percentage between steps in mono, the dominant fill.

## Tables (often the right answer)
- **Data table** — when exact values matter more than shape. house: numbers right-aligned in tabular mono, hairline row separators only (not a border on every cell), a sticky header, zebra at most 3% tint, one accent for the sortable or active column. A table beats a chart when the reader needs to read, not scan.

## House rules for every chart
- Ration color exactly like the rest of the system: the dominant and the accent carry meaning, everything else is an ink tint. No rainbow categorical palettes, no purple default.
- Label directly at the data where you can; a legend the eye must cross-reference is a last resort.
- Bars and areas start at zero. Never truncate an axis to exaggerate a change.
- Numbers in the mono, tabular figures, aligned. Axis labels small but never under ~11px.
- Gridlines are hairlines in a low ink tint, behind the data, or absent. The data is the brightest thing on screen.
- Colour-blind safe: do not encode meaning in red versus green alone; add shape, label, or position.
- No 3D, no drop shadows on bars, no dual hidden axes, no decorative gradients that distort magnitude.
- Animate on first reveal only (grow from the baseline, `--out`, staggered), then hold. Under reduced motion, render final state immediately. Tooltips and hover states are instant.
