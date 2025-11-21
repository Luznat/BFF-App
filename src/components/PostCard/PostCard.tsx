import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { theme } from "../../theme";

interface PostCardProps {
  image: string;
  title: string;
  description: string;
}

export const PostCard: React.FC<PostCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: theme.spacing[3],
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: theme.borderRadius.base,
    resizeMode: "cover",
  },
  content: {
    gap: theme.spacing[1],
    paddingHorizontal: theme.spacing[1],
  },
  title: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text.primary,
  },
  description: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.text.secondary,
  },
});
