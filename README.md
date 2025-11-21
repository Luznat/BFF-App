# 🎵 BFF - Event App

Aplicativo mobile desenvolvido em React Native com Expo para eventos de música trance. O app oferece uma experiência completa para os participantes, desde a compra de ingressos até a validação na entrada e acesso à playlist do evento.

## ✨ Funcionalidades

- 🎫 **Venda de Ingressos** - Sistema completo de compra e gerenciamento de ingressos
- 🎶 **Playlist de Músicas** - Acesso à playlist oficial do evento com todas as tracks
- ✅ **Validação de Ingressos** - Sistema de validação e controle de entrada no evento
- 📱 **Informações do Evento** - Detalhes completos sobre o evento, programação, artistas e muito mais

## 🚀 Tecnologias

- **React Native** - Framework para desenvolvimento mobile multiplataforma
- **Expo** - Plataforma e ferramentas para desenvolvimento React Native
- **TypeScript** - Tipagem estática para maior segurança e produtividade

## 📁 Estrutura do Projeto

```
BFF/
├── src/
│   ├── components/     # Componentes reutilizáveis globais
│   │   ├── BottomNavigation/
│   │   ├── Countdown/
│   │   ├── InfoCard/
│   │   ├── PostCard/
│   │   ├── TrackItem/
│   │   ├── SectionTitle/
│   │   ├── ScreenContainer/
│   │   └── Logo.tsx
│   ├── screens/         # Telas da aplicação
│   │   ├── Home/
│   │   └── Playlist/
│   ├── navigation/     # Sistema de navegação customizado
│   ├── theme/          # Sistema de temas (cores, tipografia, espaçamento)
│   ├── hooks/          # Custom hooks (useTheme)
│   ├── types/          # Definições de tipos TypeScript
│   └── constants/      # Constantes da aplicação
├── assets/             # Imagens e recursos estáticos
└── App.tsx            # Componente principal
```

## 🛠️ Instalação

```bash
# Clone o repositório
git clone https://github.com/Luznat/BFF-app.git

# Entre no diretório
cd BFF-app

# Instale as dependências
npm install
```

## ▶️ Executar

```bash
# Inicia o servidor de desenvolvimento
npm start

# Executa no Android
npm run android

# Executa no iOS
npm run ios

# Executa no navegador
npm run web
```

## 📝 Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento Expo
- `npm run android` - Executa no Android (emulador ou dispositivo físico)
- `npm run ios` - Executa no iOS (simulador ou dispositivo físico)
- `npm run web` - Executa no navegador web

## 🎯 Roadmap

- [ ] Implementação do sistema de venda de ingressos
- [ ] Integração com player de música para playlist
- [ ] Sistema de validação de ingressos com QR Code
- [ ] Tela de informações e programação do evento
- [ ] Notificações push para atualizações do evento
- [ ] Integração com redes sociais

## 📄 Licença

Este projeto é privado e de uso exclusivo.

---

Desenvolvido com ❤️ para eventos de música trance
