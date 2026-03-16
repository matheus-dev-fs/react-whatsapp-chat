import { Dispatch, JSX, SetStateAction, use, useState } from "react";
import * as C from "./new-chat.styles";
import { Button } from "../common/Button.style";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import avatarSvg from "../../assets/svgs/avatar.svg";
import { NewChatItem } from "./new-chat-item/new-chat-item.component";
import { User } from "../../types/user.type";
import { ChatListItemType } from "../../types/chat-list-item.type";

type Props = {
    setActive: Dispatch<SetStateAction<boolean>>;
    active: boolean;
    loggedUser: User;
    chatList: ChatListItemType[];
};

export const NewChat = ({ setActive, active, loggedUser, chatList }: Props): JSX.Element => {
    const [list, setList]: [any[], Dispatch<SetStateAction<any[]>>] = useState<any[]>([
        {
            id: 1,
            name: "Dua Lipa",
            avatar: avatarSvg
        },
        {
            id: 2,
            name: "The Weeknd",
            avatar: avatarSvg
        },
        {
            id: 3,
            name: "Taylor Swift",
            avatar: avatarSvg
        }
    ]);


    const handleBackButtonClick = (): void => {
        setActive(false);
    }

    return (
        <C.NewChatArea $active={active}>
            <C.NewChatHeader>
                <Button onClick={handleBackButtonClick}>
                    <ArrowBackIcon style={{ color: '#FFFFFF' }} />
                </Button>
                <C.NewChatHeadTitle>Nova conversa</C.NewChatHeadTitle>
            </C.NewChatHeader>
            <C.NewChatList>
                {list.map((item, index: number): JSX.Element => (
                    <NewChatItem key={index} name={item.name} avatar={item.avatar} />
                ))}
            </C.NewChatList>
        </C.NewChatArea>
    )
}