# Anti-patterns checklist

Review motion against this before shipping. Each item is a candidate for a future deterministic detector (grep on the CSS or JSX, no API needed). Flag, explain, fix.

## Timing and properties
- [ ] UI animation longer than 300ms (excluding deliberate scroll reveals and marquees).
- [ ] `transition: all`. Name the properties instead.
- [ ] Animating layout properties (`width`, `height`, `top`, `left`, `margin`, `padding`). Use `transform`.
- [ ] A spring or transition defined by a `duration` where a physical feel was wanted. Use damping and response.

## Easing
- [ ] `ease-in` on an enter or exit. Use `ease-out`.
- [ ] `linear` on anything that is not a marquee, hold-to-confirm, or 3D rotation.
- [ ] Browser default easing on a prominent animation where a custom curve would land harder.

## Detail
- [ ] Animating from `scale(0)`. Start near `0.93`.
- [ ] Popover or menu scaling from center instead of its trigger (missing `transform-origin`).
- [ ] No `:active` press feedback on a primary button.
- [ ] Repeated tooltip still delayed after the first.

## Decision
- [ ] Animation on a high-frequency interaction (menu, list row, repeated hover, keyboard action). Make it instant.
- [ ] Motion that adds no clarity, feedback, or spatial meaning. Remove it.
- [ ] Asymmetric enter and exit paths that break spatial consistency (comes from the right, leaves downward).

## Accessibility
- [ ] No `prefers-reduced-motion` path. Every animation needs one.
- [ ] Inertia, parallax, or autoplaying ambient motion that does not freeze under reduced motion.
- [ ] Counter or odometer that animates under reduced motion instead of snapping to its final value.

## Taste
- [ ] Brand color or gradient used at full strength where a rationed accent (a thin hairline, a soft tint) would read as more premium.
- [ ] Many small animations firing at once with no shared physics personality. Feed them one scroll velocity and progress source.

## Interaction (from production)
- [ ] A modal panel nested inside a fading backdrop, so it fades while sliding (reads as a flash). Separate the layers: dimmer fades, panel slides opaque.
- [ ] A modal or overlay unmounted as a side-effect of an unrelated state (a counter, a fetch). Drive its visibility from its own intent.
- [ ] A global click listener (spark, outside-dismiss) attached in the bubble phase, swallowed by a modal's `stopPropagation`. Use the capture phase.
- [ ] Reduced motion handled in CSS only or JS only. Do both.
