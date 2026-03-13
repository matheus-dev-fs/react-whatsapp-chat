import styled from 'styled-components';

export const ChatWindowHeaderArea = styled.div`
    height: 60px;
    border-bottom: 1px solid #CCC;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ChatWindowHeaderInfo = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const ChatWindowHeaderAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0 15px;
`;

export const ChatWindowHeaderName = styled.div`
    font-size: 17px;
    color: #000;
`;

export const ChatWindowHeaderButtons = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15px;
`;