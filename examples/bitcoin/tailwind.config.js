// Bitcoin — Tailwind config. Maps utilities to the CSS variables in tokens.css,
// so tokens.css stays the single source of truth. Tailwind v4: use an @theme block.
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        brand: "var(--brand)",
        accent: "var(--accent)",
        gold: "var(--gold)",
        success: "var(--success)",
        warning: "var(--warning)",
        danger: "var(--danger)",
        base: "var(--bg-base)",
        surface: "var(--surface)",
        ink: "var(--text)",
        muted: "var(--text-secondary)",
        separator: "var(--separator)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      borderRadius: {
        control: "var(--radius-control)",
        card: "var(--radius-card)",
        pill: "var(--radius-pill)",
      },
      boxShadow: { card: "var(--shadow-card)", sm: "var(--shadow-sm)" },
      maxWidth: { container: "var(--container-max)" },
      transitionTimingFunction: {
        out: "cubic-bezier(0.32, 0.72, 0, 1)",
        spring: "cubic-bezier(0.34, 1.3, 0.4, 1)",
        "in-out": "cubic-bezier(0.65, 0, 0.35, 1)",
      },
    },
  },
  plugins: [],
};
