import React, { Dispatch, JSX, SetStateAction, useState } from "react";
import * as C from "./chat-window.style";
import { ChatWindowHeader } from "./chat-window-header/chat-window-header.component";
import { ChatWindowBody } from "./chat-window-body/chat-window-body.component";
import { ChatWindowFooter } from "./chat-window-footer/chat-window-footer.component";
import { ChatWindowEmojiArea } from "./chat-window-emoji-area/chat-window-emoji-area.component";

export const ChatWindow = (): JSX.Element => {
    const [isEmojiAreaOpen, setIsEmojiAreaOpen]: [
        boolean, 
        Dispatch<SetStateAction<boolean>>
    ] = useState<boolean>(false);

    const handleEmojiClick = (emojiData: any): void => {
        
    };

    const openEmojiArea = (): void => {
        setIsEmojiAreaOpen(true);
    }

    const closeEmojiArea = (): void => {
        setIsEmojiAreaOpen(false);
    }

    return (
        <C.ChatWindowArea>
            <ChatWindowHeader />
            <ChatWindowBody />
            <ChatWindowEmojiArea 
                onEmojiClick={handleEmojiClick} 
                isEmojiAreaOpen={isEmojiAreaOpen}
            />
            <ChatWindowFooter 
                openEmojiArea={openEmojiArea} 
                closeEmojiArea={closeEmojiArea} 
                isEmojiAreaOpen={isEmojiAreaOpen}
            />
        </C.ChatWindowArea>
    )
}