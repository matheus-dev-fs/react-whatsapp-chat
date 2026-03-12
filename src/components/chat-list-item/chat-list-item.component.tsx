import { JSX } from "react";
import * as C from "./chat-list-item.styles"
import avatarSvg from "../../assets/svgs/avatar.svg";

export const ChatListItem = (): JSX.Element => {
    return (
        <C.ChatListItemArea>
            <C.ChatListItemAvatar src={avatarSvg} alt="Avatar"/>

            <C.ChatListItemLines>
                <C.ChatListItemLine className="chatListItemName">
                    <C.ChatListItemName>Dua Lipa</C.ChatListItemName>
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