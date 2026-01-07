import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../theme";

interface ScreenHeaderProps {
  title: string;
  onBack?: () => void;
  backIcon?: keyof typeof Feather.glyphMap;
}

export const ScreenHeader: React.FC<ScreenHeaderProps> = ({
  title,
  onBack,
  backIcon = "chevron-down",
}) => {
  return (
    <View style={styles.header}>
      {onBack ? (
        <TouchableOpacity
          style={styles.backButton}
          onPress={onBack}
          activeOpacity={0.7}
        >
          <Feather
            name={backIcon}
            size={28}
            color={theme.colors.text.primary}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.placeholder} />
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
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
  title: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
    textTransform: "uppercase",
    letterSpacing: 4,
  },
  placeholder: {
    width: 40,
  },
});

