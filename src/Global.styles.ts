import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #D2DBDC;
    margin: 0;
    font-family: 'Segoe UI', 'Helvetica Neue', 'Helvetica', 'Lucida Grande', 'Arial', 'sans-serif';
  }
`;

export default GlobalStyles;