import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../theme";
import { ProgressBar } from "../../components/ProgressBar";
import { PlaybackControls } from "../../components/PlaybackControls";
import { Track } from "../../types";
import { styles } from "./styles";

interface PlayerScreenProps {
  track: Track;
  onBack: () => void;
}

export const PlayerScreen: React.FC<PlayerScreenProps> = ({
  track,
  onBack,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("1:45");
  const [totalTime] = useState("4:10");
  const [progress] = useState(42);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    // TODO: Implementar lógica de música anterior
  };

  const handleNext = () => {
    // TODO: Implementar lógica de próxima música
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={onBack}
          activeOpacity={0.7}
        >
          <Feather
            name="chevron-down"
            size={28}
            color={theme.colors.text.primary}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Now Playing</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.content}>
        <View style={styles.artworkContainer}>
          <Image
            source={{ uri: track.image }}
            style={styles.artwork}
            resizeMode="cover"
          />
        </View>

        <View style={styles.trackInfo}>
          <Text style={styles.trackTitle}>{track.title}</Text>
          <Text style={styles.trackArtist}>{track.artist}</Text>
        </View>

        <ProgressBar
          currentTime={currentTime}
          totalTime={totalTime}
          progress={progress}
        />

        <PlaybackControls
          isPlaying={isPlaying}
          onPlayPause={handlePlayPause}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      </View>
    </View>
  );
};
