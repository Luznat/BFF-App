import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../../theme";

interface InfoItem {
  icon: string;
  text: string;
}

interface InfoCardProps {
  items: InfoItem[];
}

export const InfoCard: React.FC<InfoCardProps> = ({ items }) => {
  return (
    <View style={styles.card}>
      {items.map((item, index) => (
        <View key={index} style={styles.infoRow}>
          <Text style={styles.infoIcon}>{item.icon}</Text>
          <Text style={styles.infoText}>{item.text}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
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
});
