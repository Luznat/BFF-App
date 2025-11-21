import { colors } from "./colors";
import { typography } from "./typography";
import { spacing, borderRadius, shadows } from "./spacing";
import { Theme } from "../types/theme";

export const theme: Theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
};

export { colors, typography, spacing, borderRadius, shadows };
export type { Theme } from "../types/theme";
