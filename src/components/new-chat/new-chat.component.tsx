import { Dispatch, JSX, SetStateAction, use, useEffect, useState } from "react";
import * as C from "./new-chat.styles";
import { Button } from "../common/Button.style";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NewChatItem } from "./new-chat-item/new-chat-item.component";
import { User } from "../../types/user.type";
import { ChatListItemType } from "../../types/chat-list-item.type";
import Api from "../../services/firebase.service";

type Props = {
    setActive: Dispatch<SetStateAction<boolean>>;
    active: boolean;
    loggedUser: User;
    chatList: ChatListItemType[];
};

export const NewChat = ({ setActive, active, loggedUser, chatList }: Props): JSX.Element => {
    const [list, setList]: [User[], Dispatch<SetStateAction<User[]>>] = useState<User[]>([]);

    useEffect((): void => {
        if (!loggedUser) {
            return;
        }

        const getList = async (): Promise<void> => {
            const result: User[] = await Api.getContactList(loggedUser.id);
            setList(result);
        }

        getList();

    }, [loggedUser]);


    const addNewChat = async (user2: User): Promise<void> => {
        await Api.addNewChat(loggedUser, user2);
        handleBackButtonClick();
    }

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
                {list.map((item: User, index: number): JSX.Element => (
                    <NewChatItem 
                        key={index} 
                        name={item.name} 
                        avatar={item.avatar} 
                        onClick={() => addNewChat(item)}
                    />
                ))}
            </C.NewChatList>
        </C.NewChatArea>
    )
}