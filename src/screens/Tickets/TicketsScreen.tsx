import React, { useState } from "react";
import { View } from "react-native";
import {
  ScreenContainer,
  BottomNavigation,
  SectionTitle,
  TicketCard,
  CheckoutFooter,
} from "../../components";
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
              <TicketCard
                key={ticket.id}
                name={ticket.name}
                description={ticket.description}
                price={ticket.price}
                quantity={quantity}
                highlight={ticket.highlight}
                onQuantityIncrease={() => handleQuantityChange(ticket.id, 1)}
                onQuantityDecrease={() => handleQuantityChange(ticket.id, -1)}
              />
            );
          })}
        </View>
      </ScreenContainer>

      <CheckoutFooter
        subtotal={subtotal}
        total={total}
        onPayment={handlePayment}
      />

      <BottomNavigation activeScreen={activeScreen} onNavigate={onNavigate} />
    </View>
  );
};

