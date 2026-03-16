import { JSX } from "react";
import * as C from "./message.styles"
import { MessageType } from "../../../../types/message.type";
import { formatTime24h } from "../../../../utils/format-time-24h.util";
import { User } from "../../../../types/user.type";

type Props = {
    message: MessageType;
    loggedUser: User;
}

export const Message = ({ message, loggedUser }: Props): JSX.Element => {
    return (
        <C.MessageArea $isOwn={message.authorId === loggedUser.id}>
            <C.Message $isOwn={message.authorId === loggedUser.id}>
                <C.MessageText>{message.text}</C.MessageText>
                <C.MessageDate>{formatTime24h(message.date)}</C.MessageDate>
            </C.Message>
        </C.MessageArea>
    );
}