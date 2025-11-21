import React from "react";
import { View, ScrollView, StyleSheet, ViewStyle } from "react-native";
import { StatusBar } from "expo-status-bar";
import { theme } from "../../theme";

interface ScreenContainerProps {
  children: React.ReactNode;
  contentContainerStyle?: ViewStyle;
  showsVerticalScrollIndicator?: boolean;
}

export const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  contentContainerStyle,
  showsVerticalScrollIndicator = false,
}) => {
  return (
    <View style={styles.wrapper}>
      <StatusBar style="light" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={[styles.scrollContent, contentContainerStyle]}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      >
        {children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.main,
  },
  scrollContent: {
    paddingBottom: 80,
  },
});
