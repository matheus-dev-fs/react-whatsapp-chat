import styled from 'styled-components';

export const ChatWindowEmojiArea = styled.div<{ isEmojiAreaOpen: boolean }>`
    height: ${(props) => (props.isEmojiAreaOpen ? '230px' : '0')};
    overflow-y: hidden;
    transition: all 0.3s ease;

    & aside.EmojiPickerReact {
        width: 100% !important;
        background: none;
    }

    & aside.EmojiPickerReact .epr-emoji-category,
    & aside.EmojiPickerReact .epr-emoji-category-label {
        background: none !important;
    }
`;