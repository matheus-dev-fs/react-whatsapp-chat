import styled from "styled-components";

export const ChatListItemArea = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    height: 70px;

    &:hover {
        background-color: #F5F5F5;
    }

`;

export const ChatListItemAvatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 15px;
`;

export const ChatListItemLines = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid #EEE;
    padding-right: 15px;
    margin-left: 15px;
    flex-wrap: wrap;
    min-width: 0;
`;

export const ChatListItemLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const ChatListItemName = styled.div`
    font-size: 17px;
    color: #000;
`;

export const ChatListItemDate = styled.div`
    font-size: 12px;
    color: #999;
`;

export const ChatListItemLastMsg = styled.div`
    font-size: 14px;
    color: #999;
    display: flex;
    width: 100%;

    p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0;
    }
`;