import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.main,
  },
  scrollContent: {
    paddingTop: 64,
    paddingHorizontal: theme.spacing[4],
    paddingBottom: 200,
  },
  ticketsContainer: {
    paddingVertical: theme.spacing[4],
    gap: theme.spacing[4],
  },
});
