import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    /* html,
    html::before,
    html::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    } */
    body {
        background-color: #1a1a1a;
        color: #e8e6e3;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
    }
    h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
    }
`;