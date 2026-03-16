import styled from "styled-components";

export const MessageArea = styled.div<{ $isOwn: boolean } >`
    margin-bottom: 10px;
    display: flex;
    justify-content: ${(props: { $isOwn: boolean }) => props.$isOwn ? 'flex-end' : 'flex-start'};
`;

export const Message = styled.div<{ $isOwn: boolean } >`
    background-color: ${(props: { $isOwn: boolean }) => props.$isOwn ? '#DCF8C6' : '#FFF'};
    border-radius: 10px;
    box-shadow: 0px 1px 1px #CCC;
    display: flex;
    flex-direction: column;
    padding: 3px;
    max-width: 90%;
`;

export const MessageText = styled.div`
    font-size: 14px;
    margin: 5px 40px 5px 5px;
`;

export const MessageDate = styled.div`
    font-size: 11px;
    color: #999;
    margin-right: 5px;
    text-align: right;
    height: 15px;
    margin-top: -15px;
`;