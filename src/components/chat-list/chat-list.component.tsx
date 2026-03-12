import { JSX } from "react";
import * as C from "./chat-list.styles"
import { ChatListItem } from "../chat-list-item/chat-list-item.component";

type Props = {
    chatList: any[];
}

export const ChatList = ({ chatList }: Props): JSX.Element => {
    return (
        <C.ChatListArea>
            {chatList.map((chat, index): JSX.Element => (
                <ChatListItem key={index}/>
            ))}
        </C.ChatListArea>
    );
}