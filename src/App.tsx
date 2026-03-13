import { JSX, useState, SetStateAction, Dispatch } from "react";
import * as C from "./App.styles";
import GlobalStyles from "./Global.styles";
import { Header } from "./components/header/header.component";
import { Search } from "./components/search/search.component";
import { ChatList } from "./components/chat-list/chat-list.component";
import { ChatIntro } from "./components/chat-intro/chat-intro.component";
import { ChatWindow } from "./components/chat-window/chat-window.component";
import avatarSvg from "./assets/svgs/avatar.svg";

const App = (): JSX.Element => {
    const [chatList, setChatList]: [
        any[],
        Dispatch<SetStateAction<any[]>>
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

    const [activeChat, setActiveChat]: [
        any,
        Dispatch<SetStateAction<any>>
    ] = useState<any>({});

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
                        activeChatId={activeChat.chatId} 
                    />
                </C.Sidebar>
                <C.ContentArea>
                    {activeChat.chatId !== undefined &&
                        <ChatWindow />
                    }
                    {activeChat.chatId === undefined &&
                        <ChatIntro />
                    }
                </C.ContentArea>
            </C.AppWindow>
        </>
    );
};

export default App;