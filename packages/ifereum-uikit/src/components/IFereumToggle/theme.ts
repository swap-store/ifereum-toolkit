import { darkColors, lightColors } from "../../theme/colors";
import { IFereumToggleTheme } from "./types";

export const light: IFereumToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: IFereumToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
