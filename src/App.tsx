import { JSX, useState } from "react";
import * as C from "./App.styles";
import GlobalStyles from "./Global.styles";
import { Header } from "./components/header/header.component";
import { Search } from "./components/search/search.component";
import { ChatList } from "./components/chat-list/chat-list.component";

const App = (): JSX.Element => {
    const [chatList, setChatList] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);

    return (
        <>
            <GlobalStyles />
            <C.AppWindow>
                <C.Sidebar>
                    <Header />
                    <Search />
                    <ChatList chatList={chatList}/>
                </C.Sidebar>
                <C.ContentArea>
                    ...
                </C.ContentArea>
            </C.AppWindow>
        </>
    );
};

export default App;