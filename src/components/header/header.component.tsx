import { Dispatch, JSX, SetStateAction } from "react";
import * as C from "./header.styles"
import avatarSvg from "../../assets/svgs/avatar.svg";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from "../common/Button.style";
import { User } from "../../types/user.type";

type Props = {
    setActive: Dispatch<SetStateAction<boolean>>;
    loggedUser: User;
}

export const Header = ({ setActive, loggedUser }: Props): JSX.Element => {
    const handleNewChatButtonClick = (): void => {
        setActive(true);
    }

    return (
        <C.HeaderArea>
            <C.HeaderAvatar src={loggedUser.avatar} />
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