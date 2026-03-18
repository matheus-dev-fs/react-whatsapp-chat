import { JSX } from "react";
import * as C from "./message.styles"
import { MessageType } from "../../../../types/message.type";
import { User } from "../../../../types/user.type";
import { formatSecondsToHour } from "../../../../utils/format-seconds-to-hour";

type Props = {
    message: MessageType;
    loggedUser: User;
}

export const Message = ({ message, loggedUser }: Props): JSX.Element => {
    return (
        <C.MessageArea $isOwn={message.authorId === loggedUser.id}>
            <C.Message $isOwn={message.authorId === loggedUser.id}>
                <C.MessageText>{message.body}</C.MessageText>
                <C.MessageDate>{formatSecondsToHour(message.date.seconds)}</C.MessageDate>
            </C.Message>
        </C.MessageArea>
    );
}