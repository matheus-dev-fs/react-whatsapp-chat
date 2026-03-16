import * as C from "./new-chat-item.styles";
import { JSX } from "react";

type Props = {
    name: string;
    avatar: string;
}

export const NewChatItem = ({ name, avatar }: Props): JSX.Element => {
    return (
        <C.NewChatItemArea>
            <C.NewChatItemAvatar src={avatar} alt={name} />
            <C.NewChatItemName>{name}</C.NewChatItemName>
        </C.NewChatItemArea>
    )
}