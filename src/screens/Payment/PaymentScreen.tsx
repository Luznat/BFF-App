import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { ScreenHeader } from "../../components";
import { theme } from "../../theme";
import { styles } from "./styles";

interface PaymentScreenProps {
  onBack: () => void;
  total: number;
  ticketQuantity: number;
  ticketPrice: number;
}

type PaymentMethod = "credit" | "pix";

export const PaymentScreen: React.FC<PaymentScreenProps> = ({
  onBack,
  total,
  ticketQuantity,
  ticketPrice,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("credit");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [saveCard, setSaveCard] = useState(false);
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);
  const cardNumberInputRef = useRef<TextInput>(null);
  const cardNameInputRef = useRef<TextInput>(null);
  const cardExpiryInputRef = useRef<TextInput>(null);
  const cardCvvInputRef = useRef<TextInput>(null);

  const serviceFee = total * 0.1;
  const finalTotal = total + serviceFee;

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
        scrollViewRef.current?.scrollTo({ y: 0, animated: true });
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const scrollToInput = (inputRef: React.RefObject<TextInput>) => {
    setTimeout(() => {
      inputRef.current?.measureLayout(
        scrollViewRef.current as any,
        (x, y) => {
          scrollViewRef.current?.scrollTo({ y: y - 100, animated: true });
        },
        () => {}
      );
    }, 100);
  };

  const formatCardNumber = (text: string) => {
    const cleaned = text.replace(/\s/g, "");
    const formatted = cleaned.match(/.{1,4}/g)?.join(" ") || cleaned;
    return formatted.slice(0, 19);
  };

  const formatExpiry = (text: string) => {
    const cleaned = text.replace(/\D/g, "");
    if (cleaned.length >= 2) {
      return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
    }
    return cleaned;
  };

  const handleCardNumberChange = (text: string) => {
    setCardNumber(formatCardNumber(text));
  };

  const handleExpiryChange = (text: string) => {
    setCardExpiry(formatExpiry(text));
  };

  const handlePayment = () => {
    // TODO: Implementar lógica de pagamento
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
    >
      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        contentContainerStyle={[
          styles.scrollContent,
          !keyboardVisible && styles.scrollContentNoKeyboard,
        ]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
      >
        <ScreenHeader title="PAGAMENTO" onBack={onBack} backIcon="arrow-left" />

        <View style={styles.orderSummary}>
          <Text style={styles.sectionTitle}>RESUMO DO PEDIDO</Text>
          <View style={styles.summaryCard}>
            <View style={styles.summaryItem}>
              <View style={styles.summaryItemLeft}>
                <Ionicons
                  name="ticket-outline"
                  size={20}
                  color={theme.colors.text.primary}
                />
                <View style={styles.summaryItemText}>
                  <Text style={styles.summaryItemTitle}>
                    Ingresso Pista (Lot...)
                  </Text>
                  <Text style={styles.summaryItemSubtitle}>Entrada Inteira</Text>
                </View>
              </View>
              <Text style={styles.summaryItemPrice}>
                R$ {ticketPrice.toFixed(2).replace(".", ",")}
              </Text>
            </View>

            <View style={styles.summaryItem}>
              <View style={styles.summaryItemLeft}>
                <Feather name="file-text" size={20} color={theme.colors.text.primary} />
                <View style={styles.summaryItemText}>
                  <Text style={styles.summaryItemTitle}>Taxa de Serviço</Text>
                  <Text style={styles.summaryItemSubtitle}>10% processamento</Text>
                </View>
              </View>
              <Text style={styles.summaryItemPrice}>
                R$ {serviceFee.toFixed(2).replace(".", ",")}
              </Text>
            </View>

            <View style={styles.summaryTotal}>
              <Text style={styles.summaryTotalLabel}>TOTAL A PAGAR</Text>
              <Text style={styles.summaryTotalPrice}>
                R$ {finalTotal.toFixed(2).replace(".", ",")}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.paymentMethods}>
          <TouchableOpacity
            style={[
              styles.paymentMethodButton,
              paymentMethod === "credit" && styles.paymentMethodButtonActive,
            ]}
            onPress={() => setPaymentMethod("credit")}
            activeOpacity={0.7}
          >
            <Ionicons
              name="card-outline"
              size={24}
              color={
                paymentMethod === "credit"
                  ? theme.colors.text.inverse
                  : theme.colors.text.secondary
              }
            />
            <Text
              style={[
                styles.paymentMethodText,
                paymentMethod === "credit" && styles.paymentMethodTextActive,
              ]}
            >
              Crédito
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.paymentMethodButton,
              paymentMethod === "pix" && styles.paymentMethodButtonActive,
            ]}
            onPress={() => setPaymentMethod("pix")}
            activeOpacity={0.7}
          >
            <View style={[
              styles.pixIcon,
              paymentMethod === "pix" && styles.pixIconActive
            ]}>
              <Text style={[
                styles.pixIconText,
                paymentMethod === "pix" && styles.pixIconTextActive
              ]}>P</Text>
            </View>
            <Text
              style={[
                styles.paymentMethodText,
                paymentMethod === "pix" && styles.paymentMethodTextActive,
              ]}
            >
              Pix
            </Text>
          </TouchableOpacity>
        </View>

        {paymentMethod === "credit" && (
          <View style={styles.cardForm}>
            <View style={styles.inputContainer}>
              <Ionicons
                name="card-outline"
                size={20}
                color={theme.colors.text.secondary}
                style={styles.inputIcon}
              />
              <TextInput
                ref={cardNumberInputRef}
                style={styles.input}
                placeholder="0000 0000 0000 0000"
                placeholderTextColor={theme.colors.text.muted}
                value={cardNumber}
                onChangeText={handleCardNumberChange}
                keyboardType="numeric"
                maxLength={19}
                onFocus={() => scrollToInput(cardNumberInputRef)}
                returnKeyType="next"
                onSubmitEditing={() => cardNameInputRef.current?.focus()}
              />
              {cardNumber.length === 19 && (
                <Feather
                  name="check"
                  size={20}
                  color={theme.colors.success}
                  style={styles.inputCheck}
                />
              )}
            </View>

            <View style={styles.inputContainer}>
              <Feather
                name="user"
                size={20}
                color={theme.colors.text.secondary}
                style={styles.inputIcon}
              />
              <TextInput
                ref={cardNameInputRef}
                style={styles.input}
                placeholder="NOME COMO IMPRESSO"
                placeholderTextColor={theme.colors.text.muted}
                value={cardName}
                onChangeText={setCardName}
                autoCapitalize="characters"
                onFocus={() => scrollToInput(cardNameInputRef)}
                returnKeyType="next"
                onSubmitEditing={() => cardExpiryInputRef.current?.focus()}
              />
            </View>

            <View style={styles.rowInputs}>
              <View style={[styles.inputContainer, styles.halfInput]}>
                <Feather
                  name="calendar"
                  size={20}
                  color={theme.colors.text.secondary}
                  style={styles.inputIcon}
                />
                <TextInput
                  ref={cardExpiryInputRef}
                  style={styles.input}
                  placeholder="MM/AA"
                  placeholderTextColor={theme.colors.text.muted}
                  value={cardExpiry}
                  onChangeText={handleExpiryChange}
                  keyboardType="numeric"
                  maxLength={5}
                  onFocus={() => scrollToInput(cardExpiryInputRef)}
                  returnKeyType="next"
                  onSubmitEditing={() => cardCvvInputRef.current?.focus()}
                />
              </View>

              <View style={[styles.inputContainer, styles.halfInput]}>
                <Feather
                  name="lock"
                  size={20}
                  color={theme.colors.text.secondary}
                  style={styles.inputIcon}
                />
                <TextInput
                  ref={cardCvvInputRef}
                  style={styles.input}
                  placeholder="123"
                  placeholderTextColor={theme.colors.text.muted}
                  value={cardCvv}
                  onChangeText={setCardCvv}
                  keyboardType="numeric"
                  maxLength={4}
                  secureTextEntry
                  onFocus={() => scrollToInput(cardCvvInputRef)}
                  returnKeyType="done"
                />
              </View>
            </View>

            <View style={styles.saveCardContainer}>
              <View style={styles.saveCardText}>
                <Text style={styles.saveCardTitle}>Salvar cartão</Text>
                <Text style={styles.saveCardSubtitle}>
                  Para compras futuras mais rápidas
                </Text>
              </View>
              <Switch
                value={saveCard}
                onValueChange={setSaveCard}
                trackColor={{
                  false: theme.colors.card.border,
                  true: theme.colors.primary,
                }}
                thumbColor={theme.colors.text.primary}
              />
            </View>
          </View>
        )}

        <TouchableOpacity
          style={styles.paymentButton}
          onPress={handlePayment}
          activeOpacity={0.8}
        >
          <Feather name="lock" size={20} color={theme.colors.text.inverse} />
          <Text style={styles.paymentButtonText}>
            Pagar R$ {finalTotal.toFixed(2).replace(".", ",")}
          </Text>
        </TouchableOpacity>

        <View style={styles.securityMessage}>
          <Feather
            name="check"
            size={16}
            color={theme.colors.success}
            style={styles.securityIcon}
          />
          <Text style={styles.securityText}>
            AMBIENTE SEGURO & CRIPTOGRAFADO
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

