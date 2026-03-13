import { JSX } from "react"
import * as C from "./chat-intro.styles";
import whatsappSyncImage from "../../assets/images/whatsapp-sync.png";

export const ChatIntro = (): JSX.Element => {
    return (
        <C.ChatIntroArea>
            <C.ChatIntroImage src={whatsappSyncImage} alt="WhatsApp Chat" />
            <h1>Mantenha seu celular conectado</h1>
            <h2>WhatsApp se conecta ao seu celular para sincronizar mensagens.<br />Para reduzir o uso de dados, conecte-se ao Wi-Fi.</h2>
        </C.ChatIntroArea>
    )
}