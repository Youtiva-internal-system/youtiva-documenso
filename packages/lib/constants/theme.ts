import type { TCssVarsSchema } from '../types/css-vars';

/**
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * KEEP THIS FILE IN SYNC WITH `packages/ui/styles/theme.css`.
 *
 * These are the light-mode default values for the CSS custom properties
 * defined under `:root` in the theme stylesheet, exposed here as hex strings
 * so they can be used as defaults for colour-picker UI components and other
 * places that don't render through CSS variables.
 *
 * If you change a value in `theme.css`, update it here too. There is NO
 * automated check linking the two files; they have drifted historically
 * and will drift again unless you update both.
 *
 * Computed via `colord({ h, s, l }).toHex()` — see the inline HSL comments
 * for the source-of-truth values from `theme.css`.
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */
export const DEFAULT_BRAND_COLORS = {
  background: '#fafaf8', //              60 16.67% 97.65%
  foreground: '#14141c', //              240 16.67% 9.41%
  muted: '#f5f5f4', //                   60 4.76% 95.88%
  mutedForeground: '#5c5c74', //         240 11.54% 40.78%
  popover: '#ffffff', //                 0 0% 100%
  popoverForeground: '#14141c', //       240 16.67% 9.41%
  card: '#ffffff', //                    0 0% 100%
  cardBorder: '#edece5', //              52.5 18.18% 91.37%
  cardForeground: '#14141c', //          240 16.67% 9.41%
  fieldCard: '#fff1eb', //               12 100% 96.08%
  fieldCardBorder: '#ff9076', //         11.39 100% 73.14%
  fieldCardForeground: '#14141c', //     240 16.67% 9.41%
  widget: '#f5f5f4', //                  60 4.76% 95.88%
  widgetForeground: '#edece5', //        52.5 18.18% 91.37%
  border: '#edece5', //                  52.5 18.18% 91.37%
  input: '#edece5', //                   52.5 18.18% 91.37%
  primary: '#ff9076', //                 11.39 100% 73.14%
  primaryForeground: '#14141c', //       240 16.67% 9.41%
  secondary: '#edece5', //               52.5 18.18% 91.37%
  secondaryForeground: '#14141c', //     240 16.67% 9.41%
  accent: '#f6f1fb', //                  268.62 60.22% 96.47%
  accentForeground: '#7f4abb', //        268.14 45.38% 51.18%
  destructive: '#e8463b', //             4 79% 57%
  destructiveForeground: '#ffffff', //   0 0% 100%
  ring: '#a26edb', //                    268.62 60.22% 64.51%
  warning: '#ffb224', //                 39 100% 57%
  envelopeEditorBackground: '#fafaf8', //60 16.67% 97.65%
  // `cardBorderTint` is intentionally excluded from the colour-picker UI:
  // unlike the rest of these tokens it is consumed via `rgb(var(--token))`
  // (not `hsl(...)`) and stored as raw RGB triplets in `theme.css`. It does
  // not flow through `toNativeCssVars` and is not user-customisable from the
  // branding form. `radius` is a length, not a colour, so it lives in
  // `DEFAULT_BRAND_RADIUS` below.
} as const satisfies Record<keyof Omit<TCssVarsSchema, 'radius' | 'cardBorderTint'>, string>;

export const DEFAULT_BRAND_RADIUS = '0.75rem';
