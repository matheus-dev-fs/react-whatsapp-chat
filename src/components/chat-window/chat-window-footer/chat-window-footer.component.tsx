import { JSX } from "react";
import * as C from "./chat-window-footer.styles";
import { Button } from "../../common/Button.style";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';

export const ChatWindowFooter = (): JSX.Element => {
    return (
        <C.ChatWindowFooterArea>
            <C.ChatWindowFooterPre>
                <Button>
                    <InsertEmoticonIcon style={{ color: '#919191' }}/>
                </Button>
            </C.ChatWindowFooterPre>
            <C.ChatWindowFooterInputArea>
                <C.ChatWindowFooterInput type="text" placeholder="Digite uma mensagem"/>
            </C.ChatWindowFooterInputArea>
            <C.ChatWindowFooterPos>
                <Button>
                    <SendIcon style={{ color: '#919191' }}/>
                </Button>
            </C.ChatWindowFooterPos>
        </C.ChatWindowFooterArea>
    )
}