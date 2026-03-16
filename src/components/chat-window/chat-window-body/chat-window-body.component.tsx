import { JSX } from "react";
import * as C from "./chat-window-body.styles";
import { Message } from "./message/message.component";

type Props = {
    messages: any[];
}

export const ChatWindowBody = ({ messages }: Props): JSX.Element => {
    return (
        <C.ChatWindowBodyArea>
            {messages.map((message: { text: string }, index: number) => (
                <Message key={index} message={message.text}/>
            ))}
        </C.ChatWindowBodyArea>
    )
}