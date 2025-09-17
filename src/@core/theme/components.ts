import { COLORS } from "@core/constants/colors";
import { ThemeOptions } from "@mui/material/styles";

export const components: ThemeOptions["components"] = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        textTransform: "none",
        fontWeight: 600,
        padding: "8px 16px",
      },
    },
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        boxShadow: COLORS.grey[900],
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        borderRadius: 0,
        boxShadow: "none",
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: ({ theme }) => ({
        paddingTop: "1rem",
        paddingBottom: "1rem",
        [theme.breakpoints.down("md")]: {
          padding: "1rem",
        },
      }),
    },
  },
  MuiGrid: {
    styleOverrides: {
      root: ({ theme }) => ({
        [theme.breakpoints.down("md")]: {
          flexDirection: "column-reverse",
        },
      }),
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        "& .MuiOutlinedInput-root": {
          borderRadius: 8,
          "& fieldset": {
            borderColor: COLORS.grey[300],
          },
          "&:hover fieldset": {
            borderColor: COLORS.grey[400],
          },
          "&.Mui-focused fieldset": {
            borderColor: COLORS.grey[600],
          },
        },
        "& .MuiInputLabel-root": {
          fontWeight: 500,
        },
      },
    },
    defaultProps: {
      fullWidth: false,
      size: "medium",
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 8,
      },
    },
  },
};
