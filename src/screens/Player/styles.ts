import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.main,
    padding: theme.spacing[6],
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: theme.spacing[6],
  },
  backButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
    textTransform: "uppercase",
    letterSpacing: 4,
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  artworkContainer: {
    width: "100%",
    maxWidth: 400,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing[4],
  },
  artwork: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: theme.borderRadius.base,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  trackInfo: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: theme.spacing[8],
    paddingBottom: theme.spacing[4],
  },
  trackTitle: {
    fontSize: theme.typography.fontSize["3xl"],
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
    textAlign: "center",
    lineHeight: theme.typography.fontSize["3xl"] * 1.2,
  },
  trackArtist: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.normal,
    color: theme.colors.text.secondary,
    textAlign: "center",
    paddingTop: theme.spacing[1],
  },
});
