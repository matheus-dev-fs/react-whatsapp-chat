import { JSX } from "react";
import * as C from "./chat-window-header.styles";
import avatarSvg from "../../../assets/svgs/avatar.svg";
import { Button } from "../../common/Button.style";
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ChatListItemType } from "../../../types/chat-list-item.type";

type Props = {
    activeChat: ChatListItemType;
}

export const ChatWindowHeader = ({ activeChat }: Props): JSX.Element => {
    return (
        <C.ChatWindowHeaderArea>
            <C.ChatWindowHeaderInfo>
                <C.ChatWindowHeaderAvatar src={activeChat.avatar} />
                <C.ChatWindowHeaderName>{activeChat.title}</C.ChatWindowHeaderName>
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