import { JSX, useState, SetStateAction, Dispatch } from "react";
import * as C from "./App.styles";
import GlobalStyles from "./Global.styles";
import { Header } from "./components/header/header.component";
import { Search } from "./components/search/search.component";
import { ChatList } from "./components/chat-list/chat-list.component";
import { ChatIntro } from "./components/chat-intro/chat-intro.component";
import { ChatWindow } from "./components/chat-window/chat-window.component";
import avatarSvg from "./assets/svgs/avatar.svg";
import { ChatListItemType } from "./types/chat-list-item.type";
import { User } from "./types/user.type";
import { NewChat } from "./components/new-chat/new-chat.component";
import { Login } from "./components/login/login.component";
import { UserCredential } from "firebase/auth";

const App = (): JSX.Element => {
    const [newChatActive, setNewChatActive]: [
        boolean,
        Dispatch<SetStateAction<boolean>>
    ] = useState<boolean>(false);

    const [chatList, setChatList]: [
        ChatListItemType[],
        Dispatch<SetStateAction<ChatListItemType[]>>
    ] = useState([
        {
            chatId: 1,
            title: "Chat 1",
            avatar: avatarSvg,
        },
        {
            chatId: 2,
            title: "Chat 2",
            avatar: avatarSvg,
        },
        {
            chatId: 3,
            title: "Chat 3",
            avatar: avatarSvg,
        },
        {
            chatId: 4,
            title: "Chat 4",
            avatar: avatarSvg,
        },
        {
            chatId: 5,
            title: "Chat 5",
            avatar: avatarSvg,
        },
        {
            chatId: 6,
            title: "Chat 6",
            avatar: avatarSvg,
        },
    ]);

    const [user, setUser]: [
        User | null,
        Dispatch<SetStateAction<User | null>>
    ] = useState<User | null>(null);

    const [activeChat, setActiveChat]: [
        ChatListItemType | undefined,
        Dispatch<SetStateAction<ChatListItemType | undefined>>
    ] = useState<ChatListItemType | undefined>(undefined);

    const handleChatListItemClick = (index: number): void => {
        setActiveChat(chatList[index]);
    }

    const handleLoginData = (credential: UserCredential): void => {
         const firebaseUser = credential.user;

        const newUser: User = {
            id: Number(firebaseUser.uid),
            name: firebaseUser.displayName ?? "",
            avatar: firebaseUser.photoURL ?? "",
        }
        setUser(newUser);
    }

    return (
        <>
            <GlobalStyles />
            {!user && <Login onLogin={handleLoginData} />}
            {user &&
                <C.AppWindow>
                    <C.Sidebar>
                        <NewChat
                            loggedUser={user}
                            setActive={setNewChatActive}
                            active={newChatActive}
                            chatList={chatList}
                        />
                        <Header setActive={setNewChatActive} loggedUser={user} />
                        <Search />
                        <ChatList
                            chatList={chatList}
                            onClick={handleChatListItemClick}
                            activeChatId={activeChat?.chatId}
                        />
                    </C.Sidebar>
                    <C.ContentArea>
                        {activeChat?.chatId !== undefined &&
                            <ChatWindow loggedUser={user} />
                        }
                        {activeChat?.chatId === undefined &&
                            <ChatIntro />
                        }
                    </C.ContentArea>
                </C.AppWindow>}
        </>
    );
};

export default App;