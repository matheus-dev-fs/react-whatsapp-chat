import { ChangeEvent, Dispatch, JSX, SetStateAction, useEffect, useState, KeyboardEvent } from "react";
import * as C from "./chat-window.style";
import { ChatWindowHeader } from "./chat-window-header/chat-window-header.component";
import { ChatWindowBody } from "./chat-window-body/chat-window-body.component";
import { ChatWindowFooter } from "./chat-window-footer/chat-window-footer.component";
import { ChatWindowEmojiArea } from "./chat-window-emoji-area/chat-window-emoji-area.component";
import { EmojiClickData } from "emoji-picker-react";
import { MessageType } from "../../types/message.type";
import { User } from "../../types/user.type";
import { ChatListItemType } from "../../types/chat-list-item.type";
import Api from "../../services/firebase.service";
import { Unsubscribe } from "firebase/auth";

type Props = {
    loggedUser: User;
    activeChat: ChatListItemType;
}

export const ChatWindow = ({ loggedUser, activeChat }: Props): JSX.Element => {
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
        MessageType[],
        Dispatch<SetStateAction<MessageType[]>>
    ] = useState<MessageType[]>([]);

    const [users, setUsers]: [
        string[],
        Dispatch<SetStateAction<string[]>>
    ] = useState<string[]>([]);

    useEffect((): (() => void) | void => {
        if (!activeChat.chatId) {
            return;
        }

        setMessages([]);
        const unsub: Unsubscribe = Api.onChatContent(activeChat.chatId, setMessages, setUsers);
        return (): void => unsub();
    }, [activeChat.chatId]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const newText: string = event.target.value;
        setText(newText);
    };

    const handleEmojiClick = (emojiData: EmojiClickData): void => {
        const emoji: string = emojiData.emoji;
        setText((prevText: string): string => prevText + emoji);
    };

    const handleSendClick = (): void => {
        if (text.trim() === "") {
            return;
        }

        Api.sendMessage(activeChat, loggedUser.id, "text", text, users);
        setText("");
        setIsEmojiAreaOpen(false);
    };

    const handleInputKeyUp = (event: KeyboardEvent<HTMLInputElement>): void => {
        if (!(event.key === "Enter" && text.trim() !== "")) {
            return;
        }

        handleSendClick();
    }

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
            <ChatWindowHeader activeChat={activeChat} />
            <ChatWindowBody 
                messages={messages} 
                loggedUser={loggedUser} 
            />
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
                handleInputKeyUp={handleInputKeyUp}
                handleSendClick={handleSendClick}
                handleMicClick={handleMicClick}
                listening={listening}
            />
        </C.ChatWindowArea>
    )
}