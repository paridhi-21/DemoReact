// Theme types for strong typing

export type Shade =
  | "50" | "100" | "200" | "300" | "400"
  | "500" | "600" | "700" | "800" | "900";

export type ColorCategory = "primary" | "secondary" | "accent" | "grey";

export type ColorPalette = Record<Shade, string>;

export interface ThemeColors {
  primary: ColorPalette;
  secondary: ColorPalette;
  accent: ColorPalette;
  grey: ColorPalette;
}
