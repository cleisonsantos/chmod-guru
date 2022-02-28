import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        background-color: #1a1a1a;
        color: #e8e6e3;
    }
`;