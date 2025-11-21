import React, { useState } from "react";
import { View } from "react-native";
import { HomeScreen } from "../screens/Home/HomeScreen";
import { PlaylistScreen } from "../screens/Playlist/PlaylistScreen";

export type Screen = "Home" | "Playlist" | "Tickets" | "Profile";

export const AppNavigator = () => {
  const [activeScreen, setActiveScreen] = useState<Screen>("Home");

  const renderScreen = () => {
    switch (activeScreen) {
      case "Home":
        return (
          <HomeScreen
            onNavigate={setActiveScreen}
            activeScreen={activeScreen}
          />
        );
      case "Playlist":
        return (
          <PlaylistScreen
            onNavigate={setActiveScreen}
            activeScreen={activeScreen}
          />
        );
      case "Tickets":
        return (
          <HomeScreen
            onNavigate={setActiveScreen}
            activeScreen={activeScreen}
          />
        );
      case "Profile":
        return (
          <HomeScreen
            onNavigate={setActiveScreen}
            activeScreen={activeScreen}
          />
        );
      default:
        return (
          <HomeScreen
            onNavigate={setActiveScreen}
            activeScreen={activeScreen}
          />
        );
    }
  };

  return <View style={{ flex: 1 }}>{renderScreen()}</View>;
};
