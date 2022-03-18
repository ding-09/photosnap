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
        height: 100%;
    }
    body {
        font-family: 'DM Sans', sans-serif;
        font-size: 1.5rem;
        line-height: 2.5rem;
        height: 100%;
    }
    #root {
        display: flex;
        flex-direction: column;
        min-height: 100%;
        position: relative;
    }
    main {
        min-width: 37.5rem;
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
        color: #000;
    }
    img {
        display: block;
        max-width: 100%;
        max-height: 100%;
    }
    .light-text {
        opacity: 0.6;
    }
    .xsm-heading {
        font-size: 1.2rem;
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
        font-weight: bold;
        line-height: 4.8rem;
        letter-spacing: 0.4rem;
    }
    .hero-border {
        position: absolute;
        top: 0;
        width: 100%;
        max-width: 30%;
        height: 0.5rem;
        background: linear-gradient(
            45deg,
            ${(props) => props.theme.gradientColors.orange},
            ${(props) => props.theme.gradientColors.purple},
            ${(props) => props.theme.gradientColors.blue}
        );

        /* MEDIA QUERIES */
        @media (min-width: 768px) {
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 0.5rem;
            min-height: 55%;
        }
    }
    .features {
        margin: 6rem 3rem 3rem;
        display: flex;
        flex-direction: column;
    }
`;

export default GlobalStyle;
