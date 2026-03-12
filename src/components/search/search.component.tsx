import { JSX } from "react";
import * as C from "./search.style"
import SearchIcon from '@mui/icons-material/Search';

export const Search = (): JSX.Element => {
    return (
        <C.SearchArea>
            <C.SearchInputArea>
                <SearchIcon fontSize="small" style={{ color: "#919191" }} />
                <C.SearchInput type="search" placeholder="Procurar ou começar conversa" />
            </C.SearchInputArea>
        </C.SearchArea>
    );
}