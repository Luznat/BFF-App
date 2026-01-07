import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../theme";
import { QuantitySelector } from "../QuantitySelector";

interface TicketCardProps {
  name: string;
  description: string;
  price: number;
  quantity: number;
  highlight?: string;
  onQuantityIncrease: () => void;
  onQuantityDecrease: () => void;
}

export const TicketCard: React.FC<TicketCardProps> = ({
  name,
  description,
  price,
  quantity,
  highlight,
  onQuantityIncrease,
  onQuantityDecrease,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Ionicons
          name="ticket-outline"
          size={24}
          color={theme.colors.text.primary}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>
          {description}
          {highlight && <Text style={styles.highlight}> {highlight}</Text>}
        </Text>
        <Text style={styles.price}>
          R$ {price.toFixed(2).replace(".", ",")}
        </Text>
        <QuantitySelector
          quantity={quantity}
          onIncrease={onQuantityIncrease}
          onDecrease={onQuantityDecrease}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.card.bg,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing[4],
    flexDirection: "row",
    gap: theme.spacing[4],
    borderWidth: 1,
    borderColor: theme.colors.card.border,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.background.surface,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    gap: theme.spacing[2],
  },
  name: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
  },
  description: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.text.secondary,
    lineHeight: theme.typography.fontSize.sm * 1.5,
  },
  highlight: {
    color: theme.colors.accent,
    fontWeight: theme.typography.fontWeight.medium,
  },
  price: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
    marginTop: theme.spacing[1],
  },
});

