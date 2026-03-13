import { JSX } from "react";
import * as C from "./chat-window.style";
import { ChatWindowHeader } from "./chat-window-header/chat-window-header.component";
import { ChatWindowBody } from "./chat-window-body/chat-window-body.component";
import { ChatWindowFooter } from "./chat-window-footer/chat-window-footer.component";

export const ChatWindow = (): JSX.Element => {
    return (
        <C.ChatWindowArea>
            <ChatWindowHeader />
            <ChatWindowBody />
            <ChatWindowFooter />
        </C.ChatWindowArea>
    )
}