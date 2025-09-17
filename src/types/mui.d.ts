import "@mui/material/styles";

// Extend MUI's Palette & PaletteOptions to include `accent`
declare module "@mui/material/styles" {
  interface Palette {
    accent: Palette["primary"];
  }
  interface PaletteOptions {
    accent?: PaletteOptions["primary"];
  }
}