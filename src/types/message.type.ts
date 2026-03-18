import { Date } from './date.type'

export type MessageType = {
    text: string;
    date: Date;
    authorId: string;
    body: string;
}