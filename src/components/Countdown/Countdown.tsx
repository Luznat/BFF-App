import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../../theme";

interface CountdownProps {
  days: string;
  hours: string;
  minutes: string;
  label?: string;
}

export const Countdown: React.FC<CountdownProps> = ({
  days,
  hours,
  minutes,
  label = "A magia começa em",
}) => {
  const items = [
    { value: days, label: "Dias" },
    { value: hours, label: "Horas" },
    { value: minutes, label: "Minutos" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.countdownContainer}>
        {items.map((item, index) => (
          <View key={index} style={styles.countdownItem}>
            <Text style={styles.countdownValue}>{item.value}</Text>
            <Text style={styles.countdownLabelItem}>{item.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[8],
  },
  label: {
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
});
