import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScreenContainer, BottomNavigation, SectionTitle } from "../../components";
import { theme } from "../../theme";
import { Screen } from "../../navigation/AppNavigator";
import { styles } from "./styles";

interface TicketType {
  id: string;
  name: string;
  description: string;
  price: number;
  highlight?: string;
}

interface TicketsScreenProps {
  onNavigate?: (screen: Screen) => void;
  activeScreen?: Screen;
}

const ticketTypes: TicketType[] = [
  {
    id: "pista",
    name: "Ingresso Pista",
    description: "Acesso geral à pista principal do evento.",
    price: 250.0,
  },
];

export const TicketsScreen: React.FC<TicketsScreenProps> = ({
  onNavigate,
  activeScreen = "Tickets",
}) => {
  const [quantities, setQuantities] = useState<Record<string, number>>({
    pista: 1,
  });

  const handleQuantityChange = (ticketId: string, delta: number) => {
    setQuantities((prev) => {
      const newQuantity = Math.max(0, (prev[ticketId] || 0) + delta);
      return { ...prev, [ticketId]: newQuantity };
    });
  };

  const calculateSubtotal = () => {
    return ticketTypes.reduce((sum, ticket) => {
      return sum + ticket.price * (quantities[ticket.id] || 0);
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const total = subtotal;

  const handlePayment = () => {
    // TODO: Implementar navegação para tela de pagamento
  };

  if (!onNavigate) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ScreenContainer contentContainerStyle={styles.scrollContent}>
        <SectionTitle>Ingressos</SectionTitle>

        <View style={styles.ticketsContainer}>
          {ticketTypes.map((ticket) => {
            const quantity = quantities[ticket.id] || 0;
            return (
              <View key={ticket.id} style={styles.ticketCard}>
                <View style={styles.ticketIconContainer}>
                  <Ionicons name="ticket-outline" size={24} color={theme.colors.text.primary} />
                </View>
                <View style={styles.ticketContent}>
                  <Text style={styles.ticketName}>{ticket.name}</Text>
                  <Text style={styles.ticketDescription}>
                    {ticket.description}
                    {ticket.highlight && (
                      <Text style={styles.ticketHighlight}> {ticket.highlight}</Text>
                    )}
                  </Text>
                  <Text style={styles.ticketPrice}>
                    R$ {ticket.price.toFixed(2).replace(".", ",")}
                  </Text>
                  <View style={styles.quantityContainer}>
                    <Text style={styles.quantityLabel}>Quantidade</Text>
                    <View style={styles.quantitySelector}>
                      <TouchableOpacity
                        style={[
                          styles.quantityButton,
                          quantity === 0 && styles.quantityButtonDisabled,
                        ]}
                        onPress={() => handleQuantityChange(ticket.id, -1)}
                        disabled={quantity === 0}
                        activeOpacity={0.7}
                      >
                        <Text
                          style={[
                            styles.quantityButtonText,
                            quantity === 0 && styles.quantityButtonTextDisabled,
                          ]}
                        >
                          -
                        </Text>
                      </TouchableOpacity>
                      <Text style={styles.quantityValue}>{quantity}</Text>
                      <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={() => handleQuantityChange(ticket.id, 1)}
                        activeOpacity={0.7}
                      >
                        <Text style={styles.quantityButtonText}>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScreenContainer>

      <View style={styles.footer}>
        <View style={styles.footerRow}>
          <Text style={styles.footerLabel}>Subtotal</Text>
          <Text style={styles.footerValue}>
            R$ {subtotal.toFixed(2).replace(".", ",")}
          </Text>
        </View>
        <View style={styles.footerRow}>
          <Text style={styles.footerLabelTotal}>Total</Text>
          <Text style={styles.footerValueTotal}>
            R$ {total.toFixed(2).replace(".", ",")}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.paymentButton}
          onPress={handlePayment}
          activeOpacity={0.8}
        >
          <Text style={styles.paymentButtonText}>Ir para o Pagamento</Text>
        </TouchableOpacity>
      </View>

      <BottomNavigation activeScreen={activeScreen} onNavigate={onNavigate} />
    </View>
  );
};

