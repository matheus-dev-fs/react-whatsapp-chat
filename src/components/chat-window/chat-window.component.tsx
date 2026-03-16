import { ChangeEvent, Dispatch, JSX, SetStateAction, useState } from "react";
import * as C from "./chat-window.style";
import { ChatWindowHeader } from "./chat-window-header/chat-window-header.component";
import { ChatWindowBody } from "./chat-window-body/chat-window-body.component";
import { ChatWindowFooter } from "./chat-window-footer/chat-window-footer.component";
import { ChatWindowEmojiArea } from "./chat-window-emoji-area/chat-window-emoji-area.component";
import { EmojiClickData } from "emoji-picker-react";

export const ChatWindow = (): JSX.Element => {
    const SpeechRecognitionCtor: {
        new(): SpeechRecognition;
        prototype: SpeechRecognition;
    } = window.SpeechRecognition || window.webkitSpeechRecognition;

    let recognition: SpeechRecognition | null = null;

    if (SpeechRecognitionCtor) {
        recognition = new SpeechRecognitionCtor();
    }

    const [isEmojiAreaOpen, setIsEmojiAreaOpen]: [
        boolean,
        Dispatch<SetStateAction<boolean>>
    ] = useState<boolean>(false);

    const [text, setText]: [
        string,
        Dispatch<SetStateAction<string>>
    ] = useState<string>("");

    const [listening, setListening]: [
        boolean,
        Dispatch<SetStateAction<boolean>>
    ] = useState<boolean>(false);

    const [messages, setMessages]: [
        any[],
        Dispatch<SetStateAction<any[]>>
    ] = useState<any[]>([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const newText: string = event.target.value;
        setText(newText);
    };

    const handleEmojiClick = (emojiData: EmojiClickData): void => {
        const emoji: string = emojiData.emoji;
        setText((prevText: string): string => prevText + emoji);
    };

    const handleSendClick = (): void => {

    };

    const handleMicClick = (): void => {
        if (!recognition) {
            return;
        }

        recognition.onstart = (): void => setListening(true);
        recognition.onend = (): void => setListening(false);

        recognition.onresult = (e: SpeechRecognitionEvent): void => {
            setText((prev) => prev + e.results[0][0].transcript);
        };

        recognition.start();
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
            <ChatWindowBody messages={messages}/>
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
                handleSendClick={handleSendClick}
                handleMicClick={handleMicClick}
                listening={listening}
            />
        </C.ChatWindowArea>
    )
}