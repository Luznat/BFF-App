import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../theme";

interface PlaybackControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export const PlaybackControls: React.FC<PlaybackControlsProps> = ({
  isPlaying,
  onPlayPause,
  onPrevious,
  onNext,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPrevious}
        activeOpacity={0.7}
      >
        <Feather
          name="skip-back"
          size={32}
          color={theme.colors.text.secondary}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.playButton}
        onPress={onPlayPause}
        activeOpacity={0.8}
      >
        <Feather
          name={isPlaying ? "pause" : "play"}
          size={36}
          color={theme.colors.background.main}
          style={!isPlaying ? styles.playIconOffset : undefined}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={onNext}
        activeOpacity={0.7}
      >
        <Feather
          name="skip-forward"
          size={32}
          color={theme.colors.text.secondary}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing[8],
    paddingVertical: theme.spacing[6],
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
  playButton: {
    width: 80,
    height: 80,
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.text.primary,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  playIconOffset: {
    marginLeft: 6,
  },
});
