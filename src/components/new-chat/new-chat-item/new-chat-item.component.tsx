import * as C from "./new-chat-item.styles";
import { JSX } from "react";

type Props = {
    name: string;
    avatar: string;
    onClick: () => void;
}

export const NewChatItem = ({ name, avatar, onClick }: Props): JSX.Element => {
    return (
        <C.NewChatItemArea onClick={onClick}>
            <C.NewChatItemAvatar src={avatar} alt={name} />
            <C.NewChatItemName>{name}</C.NewChatItemName>
        </C.NewChatItemArea>
    )
}