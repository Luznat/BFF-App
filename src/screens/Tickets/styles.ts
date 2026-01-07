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
  ticketCard: {
    backgroundColor: theme.colors.card.bg,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing[4],
    flexDirection: "row",
    gap: theme.spacing[4],
    borderWidth: 1,
    borderColor: theme.colors.card.border,
  },
  ticketIconContainer: {
    width: 56,
    height: 56,
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.background.surface,
    alignItems: "center",
    justifyContent: "center",
  },
  ticketContent: {
    flex: 1,
    gap: theme.spacing[2],
  },
  ticketName: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
  },
  ticketDescription: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.text.secondary,
    lineHeight: theme.typography.fontSize.sm * 1.5,
  },
  ticketHighlight: {
    color: theme.colors.accent,
    fontWeight: theme.typography.fontWeight.medium,
  },
  ticketPrice: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
    marginTop: theme.spacing[1],
  },
  quantityContainer: {
    marginTop: theme.spacing[2],
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  quantityLabel: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.text.secondary,
  },
  quantitySelector: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing[3],
  },
  quantityButton: {
    width: 32,
    height: 32,
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.background.surface,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: theme.colors.card.border,
  },
  quantityButtonDisabled: {
    opacity: 0.5,
  },
  quantityButtonText: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
  },
  quantityButtonTextDisabled: {
    color: theme.colors.text.muted,
  },
  quantityValue: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: theme.typography.fontWeight.medium,
    color: theme.colors.text.primary,
    minWidth: 24,
    textAlign: "center",
  },
  footer: {
    position: "absolute",
    bottom: 80,
    left: 0,
    right: 0,
    backgroundColor: theme.colors.background.main,
    borderTopWidth: 1,
    borderTopColor: theme.colors.card.border,
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[4],
    gap: theme.spacing[3],
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerLabel: {
    fontSize: theme.typography.fontSize.base,
    color: theme.colors.text.primary,
  },
  footerLabelTotal: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
  },
  footerValue: {
    fontSize: theme.typography.fontSize.base,
    color: theme.colors.text.primary,
  },
  footerValueTotal: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
  },
  paymentButton: {
    backgroundColor: theme.colors.text.primary,
    borderRadius: theme.borderRadius.lg,
    paddingVertical: theme.spacing[4],
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing[2],
  },
  paymentButtonText: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.inverse,
  },
});
