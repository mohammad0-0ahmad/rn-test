import Home from "./Home";
import Details from "./Details";
import { ScreenNameType } from "../constants/screenConfigs";

export const screensComponents: ScreensType = {
  Home,
  Details,
};

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

type ScreensType = {
  [key in ScreenNameType]: () => JSX.Element;
};
