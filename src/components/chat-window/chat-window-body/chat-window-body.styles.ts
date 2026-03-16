import styled from 'styled-components';

export const ChatWindowBodyArea = styled.div`
    flex: 1;
    overflow-y: auto;
    background-color: #e5ddd5;
    padding: 20px 30px;

    &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 3px;
    }
`;