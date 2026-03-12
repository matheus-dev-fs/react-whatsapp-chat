import { JSX } from "react";
import * as C from "./App.styles";
import GlobalStyles from "./Global.styles";
import { Header } from "./components/header/header.component";
import { Search } from "./components/search/search.component";
import { ChatList } from "./components/chat-list/chat-list.component";

const App = (): JSX.Element => {
    return (
        <>
            <GlobalStyles />
            <C.AppWindow>
                <C.Sidebar>
                    <Header />
                    <Search />
                    <ChatList />
                </C.Sidebar>
                <C.ContentArea>
                    ...
                </C.ContentArea>
            </C.AppWindow>
        </>
    );
};

export default App;