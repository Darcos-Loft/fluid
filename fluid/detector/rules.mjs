// Deterministic anti-pattern rules for the `fluid` detector. No API calls.
// Each rule: { id, severity: 'error'|'warn'|'info', files?: RegExp(pathTest),
//   pattern?: RegExp(global), scan?: (content, file) => [{index, message?}], message, hint? }
// Rules split in two halves: MOTION (how it moves) and GENERIC LOOK (how it looks).

const CODE = /\.(css|scss|sass|less|html|htm|jsx|tsx|js|ts|mjs|cjs|vue|svelte|astro)$/i;
const MARKUP = /\.(html|htm|jsx|tsx|vue|svelte|astro)$/i;

export const rules = [
  // ---------- MOTION ----------
  {
    id: "transition-all",
    severity: "warn",
    files: CODE,
    pattern: /transition:\s*all\b|(?<![\w-])transition-all(?![\w-])/g,
    message: "transition: all animates every property, including layout. Name the properties you actually animate.",
    hint: "transition: color .2s, background-color .2s;",
  },
  {
    id: "animate-layout-property",
    severity: "warn",
    files: CODE,
    pattern: /transition(?:-property)?:\s*[^;{}\n]*\b(?:width|height|top|left|right|bottom|margin|padding)\b/gi,
    message: "Transitioning a layout property triggers reflow and stutters. Animate transform and opacity instead.",
    hint: "Use transform: translate()/scale() for movement and size changes.",
  },
  {
    id: "ease-in",
    severity: "info",
    files: CODE,
    pattern: /\bease-in\b(?!-out)/g,
    message: "ease-in starts slow and feels unresponsive on enters and exits. Use ease-out (the house --out).",
    hint: "transition-timing-function: var(--out, cubic-bezier(.22,1,.36,1));",
  },
  {
    id: "scale-zero",
    severity: "warn",
    files: CODE,
    pattern: /scale\(\s*0(?![\d.])\s*\)|(?<![\w-])scale:\s*0(?![\d.])/g,
    message: "Animating from scale(0) makes elements materialise from nothing. Start near 0.93 so it grows.",
    hint: "initial scale 0.93, or scale-95 in Tailwind.",
  },
  {
    id: "long-duration",
    severity: "info",
    files: CODE,
    scan: (content) => {
      const out = [];
      const re = /\b(?:transition|animation|duration)\b[^;{}\n]*?(\d+(?:\.\d+)?)(ms|s)\b/gi;
      let m;
      while ((m = re.exec(content))) {
        const v = parseFloat(m[1]);
        const ms = m[2].toLowerCase() === "s" ? v * 1000 : v;
        if (ms > 600) out.push({ index: m.index, message: `Animation runs ${ms}ms. Keep UI motion under 300ms (reveals and marquees excepted).` });
      }
      return out;
    },
    message: "Long animation duration. Keep UI motion under 300ms; long durations feel sluggish.",
    hint: "Selects ~180ms, menus and modals 200 to 300ms.",
  },
  {
    id: "dated-bounce-ease",
    severity: "info",
    files: CODE,
    pattern: /cubic-bezier\(\s*[^)]*?-\d*\.?\d+[^)]*\)/g,
    message: "A cubic-bezier with a negative control point is the dated back/anticipate bounce. Prefer a real spring or the house --spring.",
    hint: "--spring: cubic-bezier(.34, 1.4, .5, 1); or a framer spring (damping, stiffness).",
  },

  // ---------- GENERIC LOOK (the anti-generic core) ----------
  {
    id: "generic-font",
    severity: "warn",
    files: CODE,
    pattern: /(?:font-family\s*:|fontFamily\s*[:=])\s*\[?\s*["']?(?:Inter|Roboto|Arial|Helvetica)\b/gi,
    message: "Generic font set as the primary family (Inter/Roboto/Arial) is the top AI-slop tell. Pick a distinctive typeface (fallbacks are fine).",
    hint: "Pair a characterful display font with a refined body font.",
  },
  {
    id: "cliche-purple-gradient",
    severity: "warn",
    files: CODE,
    pattern: /(?:linear|radial|conic)-gradient\([^)]*\b(?:purple|violet|indigo|fuchsia|#(?:8b5cf6|a855f7|7c3aed|9333ea|6366f1|818cf8|c084fc|d8b4fe))\b[^)]*\)|(?:from|via|to)-(?:purple|violet|indigo|fuchsia)-\d{2,3}/gi,
    message: "The purple/violet gradient is the canonical AI-app look. Use a brand-specific palette and ration the accent.",
    hint: "Commit to a distinctive dominant color with one sharp accent, not a default purple wash.",
  },
  {
    id: "pure-black",
    severity: "info",
    files: CODE,
    pattern: /#000(?:000)?\b|rgb\(\s*0\s*,\s*0\s*,\s*0\s*\)|(?<![\w-])(?:text|bg|border)-black(?![\w-])/g,
    message: "Pure black reads harsh and generic. Use a tuned near-black.",
    hint: "e.g. #0e1326, or the house dark #08080a, instead of #000.",
  },
  {
    id: "emoji-icon",
    severity: "info",
    files: MARKUP,
    pattern: /\p{Extended_Pictographic}/gu,
    message: "Emoji used in markup. Emojis render inconsistently across platforms; use an SVG icon or your bespoke set.",
    hint: "Lucide or Phosphor, or hand-drawn SVG for signature work.",
  },
  {
    id: "template-signature",
    severity: "info",
    files: CODE,
    pattern: /\b(?:BackgroundBeams|BorderBeam|border-beam|animate-aurora|animate-shimmer|text-shimmer|Meteors|TracingBeam|HeroHighlight|GlowingStars|bg-grid-|bg-dot-)\b/g,
    message: "Recognisable Aceternity/Magic UI/21st template component. Re-skin with your tokens and motion, do not ship verbatim.",
    hint: "Keep the structure, replace the look (color, type, easing) with your design system.",
  },
  {
    id: "space-grotesk",
    severity: "info",
    files: CODE,
    pattern: /Space\s+Grotesk/gi,
    message: "Space Grotesk is the display font AI generations converge on. Vary it to stay distinctive.",
    hint: "Pick a heading font with more specific character.",
  },
];

export const projectRules = [
  {
    id: "no-reduced-motion",
    severity: "warn",
    test: (fileData) => {
      const hasMotion = fileData.some((f) => /@keyframes|animation:\s|transition:\s|framer-motion|\bmotion\b|whileInView|animate=\{|useScroll|\blenis\b/i.test(f.content));
      const hasGuard = fileData.some((f) => /prefers-reduced-motion|useReducedMotion/.test(f.content));
      if (hasMotion && !hasGuard) {
        return [{ file: "(project)", line: 0, message: "The project animates but has no prefers-reduced-motion path anywhere. Add reduced-motion handling.", hint: "@media (prefers-reduced-motion: reduce) { ... } or useReducedMotion()." }];
      }
      return [];
    },
  },
];
