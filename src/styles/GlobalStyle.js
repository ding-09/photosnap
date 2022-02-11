import { createGlobalStyle } from 'styled-components';

// Global Styles
const GlobalStyle = createGlobalStyle`
    *, 
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
        min-height: 100%;
    }
    body {
        font-family: 'DM Sans', sans-serif;
        font-size: 1.5rem;
        line-height: 2.5rem;
        min-height: 100%;
    }
    footer {
        margin-top: auto;
    }
    button {
        border: none;
    }
    ul {
        display: flex;
    }
    li {
        list-style-type: none;
    }
    a, button {
        text-decoration: none;
        text-transform: uppercase;
        font-size: 1.2rem;
        font-weight: 700;
        line-height: 1.6rem;
        letter-spacing: 0.2rem;
    }
    .sm-heading {
        font-size: 1.8rem;
        letter-spacing: 0.2rem;
    }
    .md-heading {
        font-size: 2.4rem;
    }
    .lg-heading {
        font-size: 4rem;
        line-height: 4.8rem;
        letter-spacing: 0.4rem;
    }
`;

export default GlobalStyle;
