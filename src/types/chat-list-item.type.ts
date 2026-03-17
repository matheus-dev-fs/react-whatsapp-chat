import { Date } from "./date.type";

export type ChatListItemType = {
    chatId: number;
    title: string;
    avatar: string;
    lastMessage?: string;
    lastMessageDate?: Date;
};

