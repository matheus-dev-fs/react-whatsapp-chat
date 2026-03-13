import styled from 'styled-components';

export const ChatIntroArea = styled.div`
    background-color: #f8f9fa;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    border-bottom: 6px solid #4ADF83;

    & h1 {
        font-size: 32px;
        color: #525252;
        font-weight: normal;
        margin-top: 30px;
    }

    & h2 {
        font-size: 14px;
        color: #777;
        font-weight: normal;
        margin-top: 20px;
        line-height: 20px;
        text-align: center;
    }
`;

export const ChatIntroImage = styled.img`
    width: 250px;
    height: auto;
`;