import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather, Ionicons } from "@expo/vector-icons";
import { theme } from "../../theme";
import { Screen } from "../../navigation/AppNavigator";
import { styles } from "./styles";

interface PlaylistScreenProps {
  onNavigate?: (screen: Screen) => void;
  activeScreen?: Screen;
}

export const PlaylistScreen: React.FC<PlaylistScreenProps> = ({
  onNavigate,
  activeScreen = "Playlist",
}) => {
  const tracks = [
    {
      id: 1,
      title: "Miss you",
      artist: "Trakino, KALEX",
      duration: "3:53",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDIBGxKOG8LJYHY06WeZ7861xFXjZVx0EpQgz2HJzDBE3Sgqu0c8fnjiDYd4qZ4NfLlGhYQNWCSYcvspQqE6hiMwnMwvGteAPMnzvB6J6d8FyJgKXLnf1EZsdFxA_1rBdNR3OrNLhfxypO4vDa0HxjI0-p92giWOYGqesc3KPLZL6y9xFf9zDiJSj8_DEpTzScRV7vXWET6Xt0W5Mn3bs4il56Jcn6l_LMeaBJYSkpAHHxxgkAqBEAIYVqxbhqRE4DfIQUqy5hn_LQ",
    },
    {
      id: 2,
      title: "Clouds on travel",
      artist: "Trakino, KALEX",
      duration: "3:53",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC2NrB08sB2IhrEuOguhs8udxAaJRCqu7BSj3UtO4yieYeDsvql13FyWkG55CWBLZt4JaGM8-AJw6uErW989co9palFYMOu5UDLopby9KLe1ysCp0tklBdl7h9Fzv1P8psYK3ZtIti-_VdK3Zequ28kd5aBWtPh5I1bHbziTXorS-DnLSmg7m5KOW0B0VOlhjH5AW8wAMjpyo0UdsoDRwDjcetLNBwQuONhQo2ALxdKIrNQ-Z88XC9DB5z259Nw9h5NYcrhC_eUxXY",
    },
    {
      id: 3,
      title: "Miss you",
      artist: "Trakino, KALEX",
      duration: "3:53",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCsrowmRQ_9DqVxO4EuOThZvBR3q61NqV59K0BLNt248rRp5SDFhEHl7N8c72XEUCimD_cLgZIxSKQUnmodw8rcgczp55cpgDrcqwDMZiE-SaKVgnrSw0aklfOqnvXU9_5oWPS8NaInFyoq3naUsWwXH_8qT5LL5PAqfgIN6FgKNQ-OV-DPlYm4OmG2yH4gsoP1UCSWglm0vniZB0PyYqC4CNjq3B-k3ISJBJAmuuSQ9qozOQB1SH7QMhhn2ZO7VqNeEmDTdc1625s",
    },
    {
      id: 4,
      title: "By your side",
      artist: "Trakino, KALEX",
      duration: "3:53",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBqyelGeKbuQamlrGVvMANBk1faxAOgQi8GWVFp1lZaRLSUuBVbvZGQSXj4XJLEkpNJsV0GaWewSJB6gF0UfcX6-dYD0yEJittwsbyE5Oa3VsgsAHYZhbJY1lXT4KRRmFSVipvhV-cF43eB1i0fqWtG97rd91zNLaiJqoOOcmHck-BPAObVrK8CR6U1sKiLUgPlgfuNwQrxtEBfn9hoCTe8Ombh70aZg6z2LTru9EXe9QbaTDpufUJTr0NZQh8RJVvwikM3YFzbEY8",
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Playlist</Text>

        <View style={styles.playlistContainer}>
          {tracks.map((track) => (
            <View key={track.id} style={styles.trackItem}>
              <Image
                source={{ uri: track.image }}
                style={styles.trackImage}
                resizeMode="cover"
              />
              <View style={styles.trackInfo}>
                <Text style={styles.trackTitle}>{track.title}</Text>
                <Text style={styles.trackArtist}>{track.artist}</Text>
              </View>
              <Text style={styles.trackDuration}>{track.duration}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => onNavigate?.("Home")}
        >
          <Feather
            name="home"
            size={22}
            color={
              activeScreen === "Home"
                ? theme.colors.text.primary
                : theme.colors.text.secondary
            }
          />
          <Text
            style={[
              styles.navLabel,
              activeScreen === "Home" && styles.navLabelActive,
            ]}
          >
            Início
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => onNavigate?.("Playlist")}
        >
          <Feather
            name="music"
            size={22}
            color={
              activeScreen === "Playlist"
                ? theme.colors.text.primary
                : theme.colors.text.secondary
            }
          />
          <Text
            style={[
              styles.navLabel,
              activeScreen === "Playlist" && styles.navLabelActive,
            ]}
          >
            Playlist
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => onNavigate?.("Tickets")}
        >
          <Ionicons
            name="ticket-outline"
            size={22}
            color={
              activeScreen === "Tickets"
                ? theme.colors.text.primary
                : theme.colors.text.secondary
            }
          />
          <Text
            style={[
              styles.navLabel,
              activeScreen === "Tickets" && styles.navLabelActive,
            ]}
          >
            Ingressos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => onNavigate?.("Profile")}
        >
          <Feather
            name="user"
            size={22}
            color={
              activeScreen === "Profile"
                ? theme.colors.text.primary
                : theme.colors.text.secondary
            }
          />
          <Text
            style={[
              styles.navLabel,
              activeScreen === "Profile" && styles.navLabelActive,
            ]}
          >
            Perfil
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
