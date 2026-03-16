import styled from "styled-components";

export const NewChatArea = styled.div<{ $active: boolean }>`
    width: 35%;
    max-width: 415px;
    position: fixed;
    top: 0;
    left: ${props => props.$active ? '0' : '-415px'};
    bottom: 0;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #DDD;
    transition: all 0.5s ease;
`;

export const NewChatHeader = styled.div`
    display: flex;
    background-color: #00BFA5;
    align-items: center;
    padding: 60px 15px 15px 15px;
`;

export const NewChatHeadTitle = styled.div`
    font-size: 19px;
    line-height: 40px;
    color: #FFF;
    flex: 1;
    font-weight: bold;
    margin-left: 20px;
`;

export const NewChatList = styled.div`
    flex: 1;
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
