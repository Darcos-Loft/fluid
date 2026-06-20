// Tiny zero-dependency ANSI helpers. Colour is suppressed when not a TTY or
// when NO_COLOR is set, so piped/CI output stays clean.

const useColor = process.stdout.isTTY && !process.env.NO_COLOR;
const wrap = (code) => (s) => (useColor ? `\x1b[${code}m${s}\x1b[0m` : String(s));

export const c = {
  aqua: wrap("38;5;43"),
  peri: wrap("38;5;111"),
  dim: wrap("2"),
  bold: wrap("1"),
  red: wrap("31"),
  yellow: wrap("33"),
  green: wrap("32"),
};

export const log = (...a) => console.log(...a);

// read --name=value or --name value from an args array
export function getOpt(args, name) {
  const eq = args.find((a) => a.startsWith(`--${name}=`));
  if (eq) return eq.split("=").slice(1).join("=");
  const i = args.indexOf(`--${name}`);
  if (i >= 0 && args[i + 1] && !args[i + 1].startsWith("--")) return args[i + 1];
  return null;
}
