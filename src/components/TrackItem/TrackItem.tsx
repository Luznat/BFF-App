import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { theme } from "../../theme";

interface TrackItemProps {
  image: string;
  title: string;
  artist: string;
  duration: string;
  onPress?: () => void;
}

export const TrackItem: React.FC<TrackItemProps> = ({
  image,
  title,
  artist,
  duration,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.artist}>{artist}</Text>
      </View>
      <Text style={styles.duration}>{duration}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing[4],
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: theme.borderRadius.base,
    resizeMode: "cover",
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing[1],
  },
  artist: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.text.secondary,
  },
  duration: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.text.secondary,
  },
});
