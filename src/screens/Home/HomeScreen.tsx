import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather, Ionicons } from "@expo/vector-icons";
import { theme } from "../../theme";
import { Logo } from "../../components";
import { styles } from "./styles";

import { Screen } from "../../navigation/AppNavigator";

interface HomeScreenProps {
  onNavigate?: (screen: Screen) => void;
  activeScreen?: Screen;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  activeScreen = "Home",
}) => {
  const countdown = {
    days: "07",
    hours: "07",
    minutes: "07",
  };

  const eventInfo = {
    location: "Portal do trance Goiânia (GO)",
    date: "03/10/25",
    time: "18:00 - 06:00",
  };

  const posts = [
    {
      id: 1,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBq31hREMUNlmfSCGimtx6Jc6y_XChd8VEcBnnmp-PsVgpSrYyapcufPtWmKuF01PoQClCl8DqIjUlB2W-bp3d6DxpFUUmBBsFSjA06XiA9B-yTJXV-v_WWU0zljYYk3PjaCg0RAgBwXRrGTScHcYjabNbEyAfclsqHEaGb9V8JYniH_WWnenf12Gxeiz3WJb-GCOD3BrMQB7hhUO4YctcNIL-kUN9cPVq-ur2h1Vjp1Laq-vZ7Ae2PPpK6HwZAnVdXw-Ljz2froXQ",
      title: "Line-up Completo Revelado!",
      description:
        "Confira a lista completa de artistas que farão desta edição uma jornada inesquecível. Prepare-se para vibrar!",
    },
    {
      id: 2,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCJWjN4K4EPhOxrelqShnzeB5AShrEd1urJ3ToOy4cPn5axR_hPgq3pJef4g865fpGY_8xa5THTs1wuinffekqYOFPsIWQJ1Wy9vBipbkE3nIgMhSHmNkrAHLM4xZQSCS9_OHEIeXeK2deRGUR1_w4gxZi07oY1tbdqvsRNNNyhfgBlrgLRvaSZ9WYO_-O_b4KBy0x7sdD8H5xRG9U1fgkOiRb4AFbunlp2-SRBtySzX9B6ualukgFVIpEpH6X74ho_EWvHrnSNaak",
      title: "Dicas para o Festival",
      description:
        "O que levar, como chegar e tudo que você precisa saber para curtir o festival da melhor forma possível.",
    },
    {
      id: 3,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCS-UPINS3-dAVZXrf1KtyuC7CV4FcV-hwNKIdn2zpsbKWk83ola_hRlAeQvdXIMzdOOiBry7dmdaqhW1p8KXVrXecyqoHpvcUN3BeBJbGI8hUMRbNYkN0AtC0wR-fDNeudieEAcckOal2CHYjrX5ov_kKi20JGLkxyKC6-7pOUCkXJQzeWGqfUqxkao7mqPiuTRZpteqSs0U1W47GdDO0eK9e7oMqngg063L-cXiUq2McDT3Dce068LdnQWF1XiGiTZlVxU4FrXjc",
      title: "Garanta seu Ingresso",
      description:
        "Os ingressos do segundo lote estão quase esgotados. Não fique de fora dessa celebração cósmica!",
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
        <View style={styles.header}>
          <ImageBackground
            source={{
              uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOb1p67_n5tYEz_n697bBLN1VbCV2SHFLexiyonBGw5btz-as0Ca_CXQXThXHKP2jksix3w-kjgNs20jYLaLiqYi8_PyBDoRReJtx5aldbND7fcq-Nw2ZDp_ufSVBblJiKmPKVvBxNzuOXbxNpXqq9iC7ghuwmoTT56qKlBD3ZwXQ3VwoViEpTU93ViCUX19J112Zed4kAIn7JeeQPIydVX1uwLx9Ai5kdtX0t4iVYOZIzFw_IMPKfodd0aRFuz2OIHcZfY6V37mc",
            }}
            style={styles.headerImage}
            resizeMode="cover"
          >
            <View style={styles.headerGradient} />
          </ImageBackground>
          <View style={styles.headerContent}>
            <View style={styles.logoContainer}>
              <Logo
                width={120}
                height={120}
                color={theme.colors.text.primary}
              />
            </View>
            <Text style={styles.title}>BFF Brasil Feelings Festival</Text>
          </View>
        </View>

        <View style={styles.countdownSection}>
          <Text style={styles.countdownLabel}>A magia começa em</Text>
          <View style={styles.countdownContainer}>
            <View style={styles.countdownItem}>
              <Text style={styles.countdownValue}>{countdown.days}</Text>
              <Text style={styles.countdownLabelItem}>Dias</Text>
            </View>
            <View style={styles.countdownItem}>
              <Text style={styles.countdownValue}>{countdown.hours}</Text>
              <Text style={styles.countdownLabelItem}>Horas</Text>
            </View>
            <View style={styles.countdownItem}>
              <Text style={styles.countdownValue}>{countdown.minutes}</Text>
              <Text style={styles.countdownLabelItem}>Minutos</Text>
            </View>
          </View>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Informações</Text>
          <View style={styles.infoCard}>
            <View style={styles.infoRow}>
              <Text style={styles.infoIcon}>📍</Text>
              <Text style={styles.infoText}>Local: {eventInfo.location}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoIcon}>📅</Text>
              <Text style={styles.infoText}>Data: {eventInfo.date}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoIcon}>🕐</Text>
              <Text style={styles.infoText}>Horário: {eventInfo.time}</Text>
            </View>
          </View>
        </View>

        <View style={styles.descriptionSection}>
          <Text style={styles.descriptionText}>
            O portal está aberto, e a música é a chave. Prepare-se para perder a
            noção do tempo e mergulhar em uma experiência que vai além.
          </Text>
        </View>

        <View style={styles.postsSection}>
          <Text style={styles.sectionTitle}>Publicações do Evento</Text>
          <View style={styles.postsContainer}>
            {posts.map((post) => (
              <View key={post.id} style={styles.postItem}>
                <Image
                  source={{ uri: post.image }}
                  style={styles.postImage}
                  resizeMode="cover"
                />
                <View style={styles.postContent}>
                  <Text style={styles.postTitle}>{post.title}</Text>
                  <Text style={styles.postDescription}>{post.description}</Text>
                </View>
              </View>
            ))}
          </View>
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
