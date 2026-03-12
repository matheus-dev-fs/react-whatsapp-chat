import { JSX } from "react";
import * as C from "./App.styles";
import GlobalStyles from "./Global.styles";

const App = (): JSX.Element => {
    return (
        <>
            <GlobalStyles />
            <C.AppWindow>
                <C.Sidebar>
                    ...
                </C.Sidebar>
                <C.ContentArea>
                    ...
                </C.ContentArea>
            </C.AppWindow>
        </>
    );
};

export default App;