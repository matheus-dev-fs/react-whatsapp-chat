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

const App = (): JSX.Element => {
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
        User, 
        Dispatch<SetStateAction<User>>
    ] = useState({ id: 789, avatar: avatarSvg, name: "Dua Lipa" });

    const [activeChat, setActiveChat]: [
        ChatListItemType | undefined,
        Dispatch<SetStateAction<ChatListItemType | undefined>>
    ] = useState<ChatListItemType | undefined>(undefined);

    const handleChatListItemClick = (index: number): void => {
        setActiveChat(chatList[index]);
    }

    return (
        <>
            <GlobalStyles />
            <C.AppWindow>
                <C.Sidebar>
                    <Header />
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
            </C.AppWindow>
        </>
    );
};

export default App;