import { Dispatch, JSX, SetStateAction } from "react";
import * as C from "./header.styles"
import avatarSvg from "../../assets/svgs/avatar.svg";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from "../common/Button.style";

type Props = {
    setActive: Dispatch<SetStateAction<boolean>>;
}

export const Header = ({ setActive }: Props): JSX.Element => {
    const handleNewChatButtonClick = (): void => {
        setActive(true);
    }

    return (
        <C.HeaderArea>
            <C.HeaderAvatar src={avatarSvg} />
            <C.HeaderButtons>
                <Button>
                    <DonutLargeIcon style={{ color: "#919191" }} />
                </Button>
                <Button onClick={handleNewChatButtonClick}>
                    <ChatIcon style={{ color: "#919191" }} />
                </Button>
                <Button>
                    <MoreVertIcon style={{ color: "#919191" }} />
                </Button>
            </C.HeaderButtons>
        </C.HeaderArea>
    );
}