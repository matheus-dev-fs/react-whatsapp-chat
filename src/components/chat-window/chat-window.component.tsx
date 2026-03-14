import { ChangeEvent, Dispatch, JSX, SetStateAction, useState } from "react";
import * as C from "./chat-window.style";
import { ChatWindowHeader } from "./chat-window-header/chat-window-header.component";
import { ChatWindowBody } from "./chat-window-body/chat-window-body.component";
import { ChatWindowFooter } from "./chat-window-footer/chat-window-footer.component";
import { ChatWindowEmojiArea } from "./chat-window-emoji-area/chat-window-emoji-area.component";
import { EmojiClickData } from "emoji-picker-react";

export const ChatWindow = (): JSX.Element => {
    const [isEmojiAreaOpen, setIsEmojiAreaOpen]: [
        boolean, 
        Dispatch<SetStateAction<boolean>>
    ] = useState<boolean>(false);

    const [text, setText]: [
        string, 
        Dispatch<SetStateAction<string>>
    ] = useState<string>("");

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const newText: string = event.target.value;
        setText(newText);
    };

    const handleEmojiClick = (emojiData: EmojiClickData): void => {
        const emoji: string = emojiData.emoji;
        setText((prevText: string): string => prevText + emoji);
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
                text={text}
                handleInputChange={handleInputChange}
            />
        </C.ChatWindowArea>
    )
}