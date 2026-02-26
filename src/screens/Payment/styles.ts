import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.main,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: theme.spacing[6],
    paddingHorizontal: theme.spacing[4],
    paddingBottom: theme.spacing[8],
    flexGrow: 1,
  },
  scrollContentNoKeyboard: {
    paddingBottom: theme.spacing[4],
  },
  orderSummary: {
    marginBottom: theme.spacing[6],
  },
  sectionTitle: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing[3],
    textTransform: "uppercase",
  },
  summaryCard: {
    backgroundColor: theme.colors.card.bg,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing[4],
    borderWidth: 1,
    borderColor: theme.colors.card.border,
    gap: theme.spacing[4],
  },
  summaryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  summaryItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing[3],
    flex: 1,
  },
  summaryItemText: {
    flex: 1,
    gap: theme.spacing[1],
  },
  summaryItemTitle: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
  },
  summaryItemSubtitle: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.text.secondary,
  },
  summaryItemPrice: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
  },
  summaryTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing[4],
    borderTopWidth: 1,
    borderTopColor: theme.colors.card.border,
    marginTop: theme.spacing[2],
  },
  summaryTotalLabel: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
  },
  summaryTotalPrice: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
  },
  paymentMethods: {
    flexDirection: "row",
    gap: theme.spacing[3],
    marginBottom: theme.spacing[6],
  },
  paymentMethodButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing[2],
    paddingVertical: theme.spacing[4],
    borderRadius: theme.borderRadius.lg,
    backgroundColor: theme.colors.card.bg,
    borderWidth: 1,
    borderColor: theme.colors.card.border,
  },
  paymentMethodButtonActive: {
    backgroundColor: theme.colors.text.primary,
    borderColor: theme.colors.text.primary,
  },
  paymentMethodText: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: theme.typography.fontWeight.medium,
    color: theme.colors.text.secondary,
  },
  paymentMethodTextActive: {
    color: theme.colors.text.inverse,
  },
  pixIcon: {
    width: 24,
    height: 24,
    borderRadius: theme.borderRadius.sm,
    backgroundColor: theme.colors.text.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  pixIconActive: {
    backgroundColor: theme.colors.text.inverse,
  },
  pixIconText: {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.background.main,
  },
  pixIconTextActive: {
    color: theme.colors.text.primary,
  },
  cardForm: {
    marginBottom: theme.spacing[6],
    gap: theme.spacing[4],
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.card.bg,
    borderRadius: theme.borderRadius.lg,
    borderWidth: 1,
    borderColor: theme.colors.card.border,
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[3],
  },
  inputIcon: {
    marginRight: theme.spacing[3],
  },
  input: {
    flex: 1,
    fontSize: theme.typography.fontSize.base,
    color: theme.colors.text.primary,
  },
  inputCheck: {
    marginLeft: theme.spacing[2],
  },
  rowInputs: {
    flexDirection: "row",
    gap: theme.spacing[3],
  },
  halfInput: {
    flex: 1,
  },
  saveCardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: theme.spacing[2],
  },
  saveCardText: {
    flex: 1,
    gap: theme.spacing[1],
  },
  saveCardTitle: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: theme.typography.fontWeight.medium,
    color: theme.colors.text.primary,
  },
  saveCardSubtitle: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.text.secondary,
  },
  paymentButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing[2],
    backgroundColor: theme.colors.text.primary,
    borderRadius: theme.borderRadius.lg,
    paddingVertical: theme.spacing[4],
    marginBottom: theme.spacing[4],
  },
  paymentButtonText: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.inverse,
  },
  securityMessage: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing[2],
  },
  securityIcon: {
    marginRight: theme.spacing[1],
  },
  securityText: {
    fontSize: theme.typography.fontSize.xs,
    color: theme.colors.text.secondary,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});

