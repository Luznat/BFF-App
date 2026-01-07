import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { theme } from "../../theme";

interface CheckoutFooterProps {
  subtotal: number;
  total: number;
  onPayment: () => void;
  paymentButtonText?: string;
  showSubtotal?: boolean;
}

export const CheckoutFooter: React.FC<CheckoutFooterProps> = ({
  subtotal,
  total,
  onPayment,
  paymentButtonText = "Ir para o Pagamento",
  showSubtotal = true,
}) => {
  const formatPrice = (price: number) => {
    return `R$ ${price.toFixed(2).replace(".", ",")}`;
  };

  return (
    <View style={styles.footer}>
      {showSubtotal && (
        <View style={styles.row}>
          <Text style={styles.label}>Subtotal</Text>
          <Text style={styles.value}>{formatPrice(subtotal)}</Text>
        </View>
      )}
      <View style={styles.row}>
        <Text style={styles.labelTotal}>Total</Text>
        <Text style={styles.valueTotal}>{formatPrice(total)}</Text>
      </View>
      <TouchableOpacity
        style={styles.paymentButton}
        onPress={onPayment}
        activeOpacity={0.8}
      >
        <Text style={styles.paymentButtonText}>{paymentButtonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: theme.typography.fontSize.base,
    color: theme.colors.text.primary,
  },
  labelTotal: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
  },
  value: {
    fontSize: theme.typography.fontSize.base,
    color: theme.colors.text.primary,
  },
  valueTotal: {
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

