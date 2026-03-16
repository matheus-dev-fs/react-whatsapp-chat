import styled from "styled-components";

export const NewChatItemArea = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
    cursor: pointer;

    &:hover {
        background-color: #F5F5F5;
    }
`;

export const NewChatItemAvatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;
`;

export const NewChatItemName = styled.div`
    font-size: 17px;
    color: #000;
`;