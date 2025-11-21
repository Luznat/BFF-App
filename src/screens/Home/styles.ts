import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.main,
  },
  scrollContent: {
    paddingBottom: 80,
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
  countdownSection: {
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[8],
  },
  countdownLabel: {
    fontSize: theme.typography.fontSize.base,
    color: theme.colors.text.secondary,
    textAlign: "center",
    marginBottom: theme.spacing[4],
  },
  countdownContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: theme.spacing[10],
  },
  countdownItem: {
    alignItems: "center",
  },
  countdownValue: {
    fontSize: theme.typography.fontSize["5xl"],
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
    lineHeight: theme.typography.fontSize["5xl"] * 1.25,
  },
  countdownLabelItem: {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.normal,
    color: theme.colors.text.secondary,
    lineHeight: theme.typography.fontSize.sm * 1.5,
  },
  infoSection: {
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[4],
  },
  sectionTitle: {
    fontSize: theme.typography.fontSize["2xl"],
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing[4],
  },
  infoCard: {
    backgroundColor: theme.colors.card.bg,
    borderRadius: theme.borderRadius.base,
    padding: theme.spacing[4],
    gap: theme.spacing[4],
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing[3],
  },
  infoIcon: {
    fontSize: theme.typography.fontSize.xl,
    color: theme.colors.text.secondary,
  },
  infoText: {
    fontSize: theme.typography.fontSize.base,
    color: theme.colors.text.primary,
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
  postItem: {
    gap: theme.spacing[3],
  },
  postImage: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: theme.borderRadius.base,
    resizeMode: "cover",
  },
  postContent: {
    gap: theme.spacing[1],
    paddingHorizontal: theme.spacing[1],
  },
  postTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text.primary,
  },
  postDescription: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.text.secondary,
  },
});
