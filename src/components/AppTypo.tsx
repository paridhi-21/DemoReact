import React from "react";
import { Typography, TypographyProps } from "@mui/material";
import { FONT_WEIGHT, LINE_HEIGHT, FONT_FAMILY, FONT_SIZES } from "@core/constants/typoconstant";

type AppVariant =
  | "display1" | "display2"
  | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  | "bodyLg" | "bodyMd" | "bodySm" | "bodyXs"
  | "caption" | "tiny";

interface AppTypoProps extends Omit<TypographyProps, "variant"> {
  appVariant: AppVariant; // use a custom name instead of `variant`
  fontWeight?: keyof typeof FONT_WEIGHT;
  lineHeight?: keyof typeof LINE_HEIGHT;
  fontFamily?: keyof typeof FONT_FAMILY;
}

const AppTypo: React.FC<AppTypoProps> = ({
  appVariant,
  fontWeight = "regular",
  lineHeight = "body",
  fontFamily = "body",
  children,
  ...rest
}) => {
  return (
    <Typography
      sx={{
        fontSize: FONT_SIZES[appVariant],
        fontWeight: FONT_WEIGHT[fontWeight],
        lineHeight: LINE_HEIGHT[lineHeight],
        fontFamily: FONT_FAMILY[fontFamily],
      }}
      {...rest}
    >
      {children}
    </Typography>
  );
};

export default AppTypo;
