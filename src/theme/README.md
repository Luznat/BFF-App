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
    backgroundColor: theme.colors.primary,
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
      backgroundColor: theme.colors.primary,
      padding: theme.spacing[3],
      borderRadius: theme.borderRadius.base,
    },
  });

  return <View style={styles.button} />;
}
```

## Cores Disponíveis

### Cores Principais

- **primary** - Cor principal do app (#af25f4 - roxo vibrante do evento)
- **secondary** - Cor secundária (#d946ef - roxo/magenta)
- **accent** - Cor de destaque (#14b8a6 - turquesa)

### Estados

- **success** - Verde para sucesso (#22c55e)
- **warning** - Amarelo para avisos (#f59e0b)
- **error** - Vermelho para erros (#ef4444)

### Background

- **background.main** - Fundo principal (#1c1022)
- **background.surface** - Superfície elevada (#2a1533)
- **background.light** - Fundo claro (#f7f5f8)

### Text

- **text.primary** - Texto principal (branco)
- **text.secondary** - Texto secundário (#bcbcbc)
- **text.muted** - Texto desativado (#7a7a7a)
- **text.inverse** - Texto invertido (preto)

### Card

- **card.bg** - Fundo do card (rgba(255,255,255,0.06))
- **card.border** - Borda do card (#3a2242)

### Palette (Design Tokens)

A `palette` contém variações de tons para uso em design tokens, não deve ser usada diretamente em componentes comuns. Inclui variações de primary, secondary, accent e neutral.

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
