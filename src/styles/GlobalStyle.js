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
    :root {
        display: flex;
        flex-direction: column;
        height: 100%;
        position: relative;
        
        /* MAIN COLORS */
        --pure-black: 0, 0, 0,;
        --light-grey: 223, 223, 223;
        --pure-white: 255, 255, 255;

        /* GRADIENT COLORS */
        --grd-blue: 90, 119, 255;
        --grd-purple: 188, 113, 152;
        --grd-orange: 255, 197, 147;

        /* TYPOGRAPHY */
        --fs-xsm: 1.2rem; 
        --fs-sm: 1.8rem; 
        --fs-md: 2.4rem; 
        --fs-lg: 4rem; 

        --line-sm: 1.6rem;
        --line-lg: 4.8rem;

        --letter-sp-sm: 0.2rem;
        --letter-sp-lg: 0.417rem;

    }
    html {
        font-size: 62.5%;
        height: 100%;
    }
    body {
        font-family: 'DM Sans', sans-serif;
        font-size: 1.5rem;
        line-height: 2.5rem;
        letter-spacing: 0;
        height: 100%;
    }
    main {
        min-width: 37.5rem;
    }
    footer {
        margin-top: auto;
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
        border: none;
    }
    img {
        display: block;
        max-width: 100%;
        height: 100%;
        object-fit: cover;
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
    .stories {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        /* MEDIA QUERIES */
        @media (min-width: 768px) {
            flex-direction: row;
            article {
                flex: 50%;
                min-height: 50rem;
            }
        }
        @media (min-width: 1200px) {
            article {
                flex: 25%;
            }
        }
    }
    .features {
        margin: 6rem 3rem 5rem;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;

        /* MEDIA QUERIES */
        @media (min-width: 768px) {
            flex-direction: row;
            justify-content: center;
            margin: 12rem 15rem 5rem;
            article {
                margin-bottom: 8rem;
            }
        }
        @media (min-width: 1200px) {
            margin: 12rem;
            article {
                flex: 25%;
                height: 23rem;
                margin: 0 3rem 0;
            }
        }
    }
`;

export default GlobalStyle;
