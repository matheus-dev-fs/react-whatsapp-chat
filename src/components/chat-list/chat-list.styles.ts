import styled from "styled-components";

export const ChatListArea = styled.div`
    flex: 1;
    background-color: #FFF;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 3px;
    }
`;