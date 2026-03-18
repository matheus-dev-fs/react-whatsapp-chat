import { Date } from "./date.type";

export type ChatListItemType = {
    chatId: string;
    title: string;
    avatar: string;
    lastMessage?: string;
    lastMessageDate?: Date;
    image: string;
};

