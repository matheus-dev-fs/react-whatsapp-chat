import { JSX, RefObject, useEffect, useRef } from "react";
import * as C from "./chat-window-body.styles";
import { Message } from "./message/message.component";
import { MessageType } from "../../../types/message.type";
import { User } from "../../../types/user.type";

type Props = {
    messages: MessageType[];
    loggedUser: User;
}

export const ChatWindowBody = ({ messages, loggedUser }: Props): JSX.Element => {
    const bodyRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if (!bodyRef.current) {
            return;
        }

        if (bodyRef.current.scrollHeight < bodyRef.current.clientHeight) {
            return;
        }

        bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }, [messages]);

    return (
        <C.ChatWindowBodyArea ref={bodyRef}>
            {messages.map((message: MessageType, index: number) => (
                <Message key={index} message={message} loggedUser={loggedUser} />
            ))}
        </C.ChatWindowBodyArea>
    )
}