import "styled-components";
import { IFereumTheme } from "./theme";
import {IFereumRoundIcon} from "./components/Svg";

declare module "styled-components" {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends IFereumTheme {}
}
