import React, { useState } from "react";
import { View } from "react-native";
import { HomeScreen } from "../screens/Home/HomeScreen";
import { PlaylistScreen } from "../screens/Playlist/PlaylistScreen";
import { PlayerScreen } from "../screens/Player";
import { Track } from "../types";

export type Screen = "Home" | "Playlist" | "Tickets" | "Profile" | "Player";

interface NavigationState {
  screen: Screen;
  track?: Track;
}

export const AppNavigator = () => {
  const [navigationState, setNavigationState] = useState<NavigationState>({
    screen: "Home",
  });

  const handleNavigate = (screen: Screen, track?: Track) => {
    setNavigationState({ screen, track });
  };

  const handleBack = () => {
    setNavigationState({ screen: "Playlist" });
  };

  const renderScreen = () => {
    switch (navigationState.screen) {
      case "Home":
        return (
          <HomeScreen
            onNavigate={handleNavigate}
            activeScreen={navigationState.screen}
          />
        );
      case "Playlist":
        return (
          <PlaylistScreen
            onNavigate={handleNavigate}
            activeScreen={navigationState.screen}
          />
        );
      case "Player":
        if (!navigationState.track) {
          return (
            <PlaylistScreen
              onNavigate={handleNavigate}
              activeScreen="Playlist"
            />
          );
        }
        return (
          <PlayerScreen track={navigationState.track} onBack={handleBack} />
        );
      case "Tickets":
        return (
          <HomeScreen
            onNavigate={handleNavigate}
            activeScreen={navigationState.screen}
          />
        );
      case "Profile":
        return (
          <HomeScreen
            onNavigate={handleNavigate}
            activeScreen={navigationState.screen}
          />
        );
      default:
        return (
          <HomeScreen
            onNavigate={handleNavigate}
            activeScreen={navigationState.screen}
          />
        );
    }
  };

  return <View style={{ flex: 1 }}>{renderScreen()}</View>;
};
