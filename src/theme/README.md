# Theme System

Sistema de tema centralizado para gerenciamento de estilos do projeto.

## Estrutura

- **colors.ts** - Paleta de cores completa (primary, secondary, accent, neutral, success, warning, error)
- **typography.ts** - Configurações de fonte, tamanhos e pesos
- **spacing.ts** - Espaçamentos, border radius e sombras
- **index.ts** - Exportação centralizada do tema

## Uso

### Importação direta

```typescript
import { theme } from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary[500],
    padding: theme.spacing[4],
    borderRadius: theme.borderRadius.md,
  },
  text: {
    fontSize: theme.typography.fontSize.lg,
    color: theme.colors.text.primary,
  },
});
```

### Usando o hook useTheme

```typescript
import { useTheme } from "../hooks/useTheme";
import { StyleSheet } from "react-native";

function MyComponent() {
  const theme = useTheme();

  const styles = StyleSheet.create({
    button: {
      backgroundColor: theme.colors.primary[600],
      padding: theme.spacing[3],
      borderRadius: theme.borderRadius.base,
    },
  });

  return <View style={styles.button} />;
}
```

## Cores Disponíveis

- **Primary** - Cor principal do app (#af25f4 - roxo vibrante do evento)
- **Secondary** - Cor secundária (roxo/magenta)
- **Accent** - Cor de destaque (turquesa)
- **Neutral** - Tons de cinza (escala Tailwind)
- **Success** - Verde para sucesso
- **Warning** - Amarelo para avisos
- **Error** - Vermelho para erros
- **Background** - Cores de fundo (light: #f7f5f8, dark: #1c1022, black: #000000)
- **Text** - Cores de texto (primary: branco, secondary: cinza claro, tertiary: cinza médio, inverse: preto)
- **Card** - Cores para cards (background com opacidade, border)

## Espaçamentos

Use `theme.spacing[1]` até `theme.spacing[32]` para espaçamentos consistentes.

## Tipografia

- **fontSize**: xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl
- **fontWeight**: normal, medium, semibold, bold
- **lineHeight**: tight, normal, relaxed

## Border Radius

- none: 0
- sm: 4px
- base: 16px (1rem - padrão do design)
- md: 12px
- lg: 32px (2rem)
- xl: 48px (3rem)
- 2xl: 24px
- full: 9999px

## Shadows

- sm, base, md, lg, xl
