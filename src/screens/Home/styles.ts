import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.main,
  },
  header: {
    height: "45%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  headerImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  headerGradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  headerContent: {
    zIndex: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    marginBottom: theme.spacing[2],
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: theme.typography.fontSize["3xl"],
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
    textTransform: "uppercase",
    letterSpacing: 4,
    textAlign: "center",
  },
  infoSection: {
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[4],
  },
  descriptionSection: {
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[4],
  },
  descriptionText: {
    fontSize: theme.typography.fontSize.base,
    color: theme.colors.text.secondary,
    lineHeight:
      theme.typography.fontSize.base * theme.typography.lineHeight.relaxed,
  },
  postsSection: {
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[4],
  },
  postsContainer: {
    gap: theme.spacing[6],
  },
});
