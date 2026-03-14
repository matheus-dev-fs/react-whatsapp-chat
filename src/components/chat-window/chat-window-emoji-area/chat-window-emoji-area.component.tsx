import { JSX } from "react";
import * as C from "./chat-window-emoji-area.styles";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

type Props = {
    onEmojiClick: (emojiData: EmojiClickData) => void;
    isEmojiAreaOpen: boolean;
}

export const ChatWindowEmojiArea = ({ onEmojiClick, isEmojiAreaOpen }: Props): JSX.Element => {
    return (
        <C.ChatWindowEmojiArea $isEmojiAreaOpen={isEmojiAreaOpen}>
            <EmojiPicker
                searchDisabled
                skinTonesDisabled
                onEmojiClick={onEmojiClick}
            />
        </C.ChatWindowEmojiArea>
    );
}