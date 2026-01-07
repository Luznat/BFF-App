import React, { useState } from "react";
import { View } from "react-native";
import { HomeScreen } from "../screens/Home/HomeScreen";
import { PlaylistScreen } from "../screens/Playlist/PlaylistScreen";
import { PlayerScreen } from "../screens/Player";
import { TicketsScreen } from "../screens/Tickets";
import { PaymentScreen } from "../screens/Payment";
import { Track } from "../types";

export type Screen = "Home" | "Playlist" | "Tickets" | "Profile" | "Player" | "Payment";

interface NavigationState {
  screen: Screen;
  track?: Track;
  paymentData?: {
    total: number;
    ticketQuantity: number;
    ticketPrice: number;
  };
}

export const AppNavigator = () => {
  const [navigationState, setNavigationState] = useState<NavigationState>({
    screen: "Home",
  });

  const handleNavigate = (
    screen: Screen,
    track?: Track,
    paymentData?: { total: number; ticketQuantity: number; ticketPrice: number }
  ) => {
    setNavigationState({ screen, track, paymentData });
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
          <TicketsScreen
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
      case "Payment":
        if (!navigationState.paymentData) {
          return (
            <TicketsScreen
              onNavigate={handleNavigate}
              activeScreen="Tickets"
            />
          );
        }
        return (
          <PaymentScreen
            onBack={() => handleNavigate("Tickets")}
            total={navigationState.paymentData.total}
            ticketQuantity={navigationState.paymentData.ticketQuantity}
            ticketPrice={navigationState.paymentData.ticketPrice}
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
