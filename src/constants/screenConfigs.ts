export const screensNames = {
  Home: "Home",
  Details: "Details",
} as const;

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

export type ScreenNameType = keyof typeof screensNames;
