import { JSX } from "react";
import * as C from "./chat-window-header.styles";
import avatarSvg from "../../../assets/svgs/avatar.svg";
import { Button } from "../../common/Button.style";
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const ChatWindowHeader = (): JSX.Element => {
    return (
        <C.ChatWindowHeaderArea>
            <C.ChatWindowHeaderInfo>
                <C.ChatWindowHeaderAvatar src={avatarSvg} />
                <C.ChatWindowHeaderName>Dua Lipa</C.ChatWindowHeaderName>
            </C.ChatWindowHeaderInfo>

            <C.ChatWindowHeaderButtons>
                <Button>
                    <SearchIcon style={{ color: '#919191' }} />
                </Button>
                <Button>
                    <AttachFileIcon style={{ color: '#919191' }}/>
                </Button>
                <Button>
                    <MoreVertIcon style={{ color: '#919191' }} />
                </Button>
            </C.ChatWindowHeaderButtons>
        </C.ChatWindowHeaderArea>
    )
}