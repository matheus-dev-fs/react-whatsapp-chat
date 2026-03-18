# React WhatsApp Chat (Clone)

Clone funcional (simplificado) do WhatsApp feito em **React + TypeScript**, com **Firebase Auth + Firestore**.

Projeto desenvolvido durante o curso de **React da B7Web**, porém **consideravelmente aprimorado** por mim com foco em **organização**, **tipagem** e **clean code**.

## Funcionalidades

- **Login com Google** via Firebase Authentication (popup)
- Criação/armazenamento de usuários no **Firestore**
- Listagem de contatos para iniciar uma **Nova conversa**
- Lista de chats do usuário (ordenada pela última mensagem)
- Chat em tempo real com:
  - envio de mensagens (texto)
  - **emojis** (emoji-picker)
  - **microfone / SpeechRecognition** (transcrição no input, quando suportado pelo navegador)

## Melhorias aplicadas (em relação ao projeto base do curso)

- **Troca do provider de autenticação**
  - Neste projeto o login é feito com **Google Auth**
  - No projeto original do curso, o login era feito com **Facebook Auth**
- **Migração e uso consistente de TypeScript**
  - Tipos dedicados em `src/types/` (ex.: `User`, `ChatListItemType`, `MessageType`, etc.)
  - Props tipadas nos componentes e melhor previsibilidade do fluxo de dados
- **Estilização com styled-components**
  - Este projeto usa **styled-components** para organizar e encapsular estilos por componente
  - No projeto base do curso, a abordagem era com **CSS padrão**
- **Separação de responsabilidades**
  - Integração com Firebase centralizada em `src/services/firebase.service.ts`
  - Config do Firebase isolada em `src/services/firebase.config.ts` (lendo variáveis de ambiente)
- **Organização de pastas e componentes**
  - Componentes agrupados por contexto em `src/components/` (ex.: `chat-window`, `chat-list`, `login`, `new-chat`, etc.)
- **Funções utilitárias**
  - Ex.: `src/utils/format-seconds-to-hour.ts` para formatar horários
- **Tratamento básico de erros / cenários inválidos**
  - Logs e validações em pontos críticos (ex.: usuário inexistente, chat inexistente, ausência de dados ao logar, etc.)

## Tecnologias

- React
- TypeScript
- Firebase (Auth + Firestore)
- styled-components
- MUI (Material UI) / Icons
- emoji-picker-react

## Estrutura (visão geral)

- `src/App.tsx`  
  Controla autenticação, sidebar (header, busca, lista), seleção do chat e renderização da janela do chat.
- `src/services/firebase.service.ts`  
  Camada de integração com Firebase:
  - login (`loginPopup`)
  - criação de usuário (`addUser`)
  - listagem de contatos (`getContactList`)
  - criação de chat (`addNewChat`)
  - listeners em tempo real (`onChatList`, `onChatContent`)
  - envio de mensagem e atualização do “last message” (`sendMessage`)
- `src/components/`  
  Componentes de UI (Login, Header, NewChat, ChatList, ChatWindow, etc.)
- `src/types/`  
  Tipos principais da aplicação
- `src/utils/`  
  Utilitários

## Configuração do Firebase (ENV)

Existe um `.env.example` no projeto. Crie um arquivo `.env` na raiz seguindo o mesmo padrão:

```env
REACT_APP_API_KEY=...
REACT_APP_AUTH_DOMAIN=...
REACT_APP_PROJECT_ID=...
REACT_APP_STORAGE_BUCKET=...
REACT_APP_MESSAGING_SENDER_ID=...
REACT_APP_ID=...
```

Depois, configure no Firebase:
- **Authentication**: habilite o provider **Google**
- **Firestore Database**: crie o banco e utilize as coleções `users` e `chats`

## Como rodar

```bash
npm install
npm start
```

Acesse: `http://localhost:3000`

## Notas

- A feature de **microfone (SpeechRecognition)** depende do suporte do navegador (`window.SpeechRecognition` / `webkitSpeechRecognition`). Se não existir, o app apenas ignora essa funcionalidade.