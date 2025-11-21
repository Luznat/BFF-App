import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { theme } from "../../theme";
import { Screen } from "../../navigation/AppNavigator";

interface BottomNavigationProps {
  activeScreen: Screen;
  onNavigate: (screen: Screen, track?: any) => void;
}

interface NavItem {
  screen: Screen;
  label: string;
  iconName: string;
  iconFamily: "feather" | "ionicons";
}

const navItems: NavItem[] = [
  { screen: "Home", label: "Início", iconName: "home", iconFamily: "feather" },
  {
    screen: "Playlist",
    label: "Playlist",
    iconName: "music",
    iconFamily: "feather",
  },
  {
    screen: "Tickets",
    label: "Ingressos",
    iconName: "ticket-outline",
    iconFamily: "ionicons",
  },
  {
    screen: "Profile",
    label: "Perfil",
    iconName: "user",
    iconFamily: "feather",
  },
];

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeScreen,
  onNavigate,
}) => {
  const renderIcon = (item: NavItem) => {
    const isActive = activeScreen === item.screen;
    const iconColor = isActive
      ? theme.colors.text.primary
      : theme.colors.text.secondary;

    if (item.iconFamily === "ionicons") {
      return (
        <Ionicons name={item.iconName as any} size={22} color={iconColor} />
      );
    }

    return <Feather name={item.iconName as any} size={22} color={iconColor} />;
  };

  return (
    <View style={styles.container}>
      {navItems.map((item) => {
        const isActive = activeScreen === item.screen;
        return (
          <TouchableOpacity
            key={item.screen}
            style={styles.navItem}
            onPress={() => onNavigate(item.screen)}
          >
            {renderIcon(item)}
            <Text style={[styles.navLabel, isActive && styles.navLabelActive]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  navLabel: {
    fontSize: theme.typography.fontSize.xs,
    color: theme.colors.text.secondary,
  },
  navLabelActive: {
    color: theme.colors.text.primary,
    fontWeight: theme.typography.fontWeight.medium,
  },
});
