import { JSX } from "react";
import * as C from "./chat-list-item.styles"
import { ChatListItemType } from "../../types/chat-list-item.type";
import { formatSecondsToHour } from "../../utils/format-seconds-to-hour";

type Props = {
    onClick: () => void;
    active: boolean;
    chat: ChatListItemType;
}

export const ChatListItem = ({ onClick, active, chat }: Props): JSX.Element => {
    return (
        <C.ChatListItemArea onClick={onClick} $active={active}>
            <C.ChatListItemAvatar src={chat.image} alt="Avatar"/>

            <C.ChatListItemLines>
                <C.ChatListItemLine className="chatListItemName">
                    <C.ChatListItemName>{chat.title}</C.ChatListItemName>
                    <C.ChatListItemDate>{formatSecondsToHour(chat.lastMessageDate?.seconds)}</C.ChatListItemDate>
                </C.ChatListItemLine>
                <C.ChatListItemLine className="chatListItemLastMsg">
                    <C.ChatListItemLastMsg>
                        <p>{chat.lastMessage}</p>
                    </C.ChatListItemLastMsg>
                </C.ChatListItemLine>
            </C.ChatListItemLines>
        </C.ChatListItemArea>
    );
}