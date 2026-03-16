import { JSX } from "react";
import * as C from "./message.styles"

type Props = {
    message: string;
}

export const Message = ({ message }: Props): JSX.Element => {
    return (
        <C.MessageArea>
            <C.Message>
                <C.MessageText>bla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla</C.MessageText>
                <C.MessageDate>12:00</C.MessageDate>
            </C.Message>
        </C.MessageArea>
    );
}