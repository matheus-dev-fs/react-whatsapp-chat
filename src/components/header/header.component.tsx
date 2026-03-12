import { JSX } from "react";
import * as C from "./header.styles"
import avatarSvg from "../../assets/svgs/avatar.svg";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from "../common/Button.style";

export const Header = (): JSX.Element => {
    return (
        <C.HeaderArea>
            <C.HeaderAvatar src={avatarSvg} />
            <C.HeaderButtons>
                <Button>
                    <DonutLargeIcon style={{ color: "#919191" }} />
                </Button>
                <Button>
                    <ChatIcon style={{ color: "#919191" }} />
                </Button>
                <Button>
                    <MoreVertIcon style={{ color: "#919191" }} />
                </Button>
            </C.HeaderButtons>
        </C.HeaderArea>
    );
}