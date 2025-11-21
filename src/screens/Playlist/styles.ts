import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.main,
  },
  scrollContent: {
    paddingBottom: 80,
    paddingTop: 64,
    paddingHorizontal: theme.spacing[4],
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    borderTopWidth: 1,
    borderTopColor: theme.colors.card.border,
    height: 80,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: theme.spacing[4],
  },
  navItem: {
    alignItems: "center",
    gap: theme.spacing[1],
  },
  navIcon: {
    color: theme.colors.text.secondary,
  },
  navIconActive: {
    color: theme.colors.text.primary,
  },
  navLabel: {
    fontSize: theme.typography.fontSize.xs,
    color: theme.colors.text.secondary,
  },
  navLabelActive: {
    color: theme.colors.text.primary,
    fontWeight: theme.typography.fontWeight.medium,
  },
  title: {
    fontSize: theme.typography.fontSize["3xl"],
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing[8],
  },
  playlistContainer: {
    gap: theme.spacing[6],
  },
  trackItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing[4],
  },
  trackImage: {
    width: 64,
    height: 64,
    borderRadius: theme.borderRadius.base,
    resizeMode: "cover",
  },
  trackInfo: {
    flex: 1,
  },
  trackTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing[1],
  },
  trackArtist: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.text.secondary,
  },
  trackDuration: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.text.secondary,
  },
});
