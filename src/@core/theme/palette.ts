import { ThemeOptions } from "@mui/material/styles";
import { COLORS } from "../constants/colors";

export const palette: ThemeOptions["palette"] = {
  primary: {
    light: COLORS.primary[300],
    main: COLORS.primary[500],
    dark: COLORS.primary[700],
    contrastText: "#fff",
  },
  secondary: {
    light: COLORS.secondary[300],
    main: COLORS.secondary[500],
    dark: COLORS.secondary[700],
    contrastText: "#fff",
  },
  accent: {
    light: COLORS.accent[300],
    main: COLORS.accent[500],
    dark: COLORS.accent[700],
    contrastText: "#000",
  },
  grey: COLORS.grey,
  error: { main: "#f44336" },
  warning: { main: "#ff9800" },
  info: { main: "#2196f3" },
  success: { main: "#4caf50" },
  background: {
    default: COLORS.grey[50], // Light background for the page
    paper: COLORS.grey[100], // Slightly darker for cards
  },
  text: {
    primary: COLORS.grey[900],
    secondary: COLORS.grey[600],
  },
};