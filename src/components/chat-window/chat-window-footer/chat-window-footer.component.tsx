import { ChangeEvent, Dispatch, JSX, SetStateAction, useState } from "react";
import * as C from "./chat-window-footer.styles";
import { Button } from "../../common/Button.style";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';

type Props = {
    openEmojiArea: () => void;
    closeEmojiArea: () => void;
    isEmojiAreaOpen: boolean;
    text: string;
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const ChatWindowFooter = ({ 
    openEmojiArea, 
    closeEmojiArea, 
    isEmojiAreaOpen, 
    text, 
    handleInputChange 
}: Props): JSX.Element => {
    return (
        <C.ChatWindowFooterArea>
            <C.ChatWindowFooterPre>
                {isEmojiAreaOpen && (
                    <Button onClick={closeEmojiArea}>
                        <CloseIcon style={{ color: '#919191' }} />
                    </Button>
                )}
                <Button onClick={openEmojiArea}>
                    <InsertEmoticonIcon style={{ color: `${isEmojiAreaOpen ? '#009688' : '#919191'}` }} />
                </Button>
            </C.ChatWindowFooterPre>
            <C.ChatWindowFooterInputArea>
                <C.ChatWindowFooterInput 
                    type="text" 
                    placeholder="Digite uma mensagem" 
                    value={text}
                    onChange={handleInputChange}
                />
            </C.ChatWindowFooterInputArea>
            <C.ChatWindowFooterPos>
                <Button>
                    <SendIcon style={{ color: '#919191' }} />
                </Button>
            </C.ChatWindowFooterPos>
        </C.ChatWindowFooterArea>
    )
}