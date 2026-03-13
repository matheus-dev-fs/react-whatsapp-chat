import { JSX } from "react";
import * as C from "./chat-list-item.styles"

type Props = {
    onClick: () => void;
    active: boolean;
    chat: any;
}

export const ChatListItem = ({ onClick, active, chat }: Props): JSX.Element => {
    return (
        <C.ChatListItemArea onClick={onClick} active={active}>
            <C.ChatListItemAvatar src={chat.avatar} alt="Avatar"/>

            <C.ChatListItemLines>
                <C.ChatListItemLine className="chatListItemName">
                    <C.ChatListItemName>{chat.title}</C.ChatListItemName>
                    <C.ChatListItemDate>19:00</C.ChatListItemDate>
                </C.ChatListItemLine>
                <C.ChatListItemLine className="chatListItemLastMsg">
                    <C.ChatListItemLastMsg>
                        <p>Hi, how are you?</p>
                    </C.ChatListItemLastMsg>
                </C.ChatListItemLine>
            </C.ChatListItemLines>
        </C.ChatListItemArea>
    );
}