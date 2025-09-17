import { COLORS } from "../constants/colors";
import { ColorCategory, Shade } from "../types/theme";

export const getShade = (color: ColorCategory, shade: Shade) =>
  COLORS[color][shade];
