import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../../theme";

interface ProgressBarProps {
  currentTime: string;
  totalTime: string;
  progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentTime,
  totalTime,
  progress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.barContainer}>
        <View
          style={[styles.progressBar, { width: `${Math.min(progress, 100)}%` }]}
        />
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{currentTime}</Text>
        <Text style={styles.timeText}>{totalTime}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: theme.spacing[2],
    paddingHorizontal: theme.spacing[2],
    paddingVertical: theme.spacing[4],
  },
  barContainer: {
    height: 4,
    width: "100%",
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.palette.neutral.dark,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.text.primary,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingTop: theme.spacing[2],
  },
  timeText: {
    fontSize: theme.typography.fontSize.xs,
    color: theme.colors.text.secondary,
    fontWeight: theme.typography.fontWeight.normal,
  },
});
