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
  },
  playlistContainer: {
    gap: theme.spacing[6],
  },
});
