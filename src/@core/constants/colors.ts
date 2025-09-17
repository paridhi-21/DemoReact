import { ThemeColors } from "@demo-react/@types/theme";

export const COLORS: ThemeColors = {
  primary: {
    50:  "#fffefc",
    100: "#fffdf7",
    200: "#fefcf1",
    300: "#fbf8e6",
    400: "#f7f2d8",
    500: "#f2ecd0", // base
    600: "#e6ddba",
    700: "#d4cba6",
    800: "#bfb691",
    900: "#a19977",
  },
  secondary: {
    50:  "#fff8e1",
    100: "#ffecb3",
    200: "#ffe082",
    300: "#ffd54f",
    400: "#ffca28",
    500: "#ffc107", // base
    600: "#ffb300",
    700: "#ffa000",
    800: "#ff8f00",
    900: "#ff6f00",
  },
  accent: {
    50:  "#f9ebed",
    100: "#f2cdd1",
    200: "#e99fa7",
    300: "#e0707d",
    400: "#d94b5e",
    500: "#a52a2a", // base dark maroon
    600: "#902626",
    700: "#7a2020",
    800: "#641a1a",
    900: "#4a1212",
  },
  grey: {
    50: "#FAFAFA",
    100: "#F5F5F5",
    200: "#EEEEEE",
    300: "#E0E0E0",
    400: "#BDBDBD",
    500: "#9E9E9E",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
  },
} as const;
