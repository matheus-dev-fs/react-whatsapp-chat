import { JSX } from "react";
import * as C from "./chat-list.styles"
import { ChatListItem } from "../chat-list-item/chat-list-item.component";

type Props = {
    chatList: any[];
    onClick: (index: number) => void;
    activeChatId: number | undefined;
}

export const ChatList = ({ chatList, onClick, activeChatId }: Props): JSX.Element => {
    return (
        <C.ChatListArea>
            {chatList.map((chat, index: number): JSX.Element => (
                <ChatListItem 
                    key={index}
                    chat={chat}
                    onClick={(): void => onClick(index)}
                    active={chat.chatId === activeChatId}
                />
            ))}
        </C.ChatListArea>
    );
}