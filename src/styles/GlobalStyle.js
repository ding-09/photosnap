import { createGlobalStyle } from 'styled-components';

// Font
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap');
</style>;

// Global Styles
const GlobalStyle = createGlobalStyle`
    -webkit-font-smoothing: antialiased;
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        &:focus {
            outline: none;
        }
    }
    html {
        font-size: 62.5%;
        position: relative;
    }
    body {
        font-family: 'DM Sans', sans-serif;
    }
    html, body{ height: 100%;}

    header {
        @media (max-width: 768px){
            position: sticky;
            top: 0;
            background: #ffffff;
            z-index: 2;
        }
    }
    footer {
        background: #000000;
        padding: 6.4rem 3.9rem;
        height: auto;
        @media (max-width: 700px) {
            padding: 0;
        }
    }
    h1, .heading {
        font-size: 4rem;
        line-height: 4.8rem;
        letter-spacing: 4.17px;
        font-weight: 700;
    }
    h2 {
        font-size: 2.4rem;
        line-height: 2.5rem;
    }
    h3 {
        font-size: 1.8rem;
        line-height: 2.5rem;
    }
    h4 {
        font-size: 1.2rem;
        line-height: 1.6rem;
        letter-spacing: 2px;
    }
    p {
        font-size: 1.5rem;
        line-height: 2.5rem;
    }
    ul {
        list-style-type: none;
    }
    a, button{ 
        font-size: 1.2rem;
        font-weight: bold;
        line-height: 1.6rem;
        letter-spacing: 2px;
    }
    a {
        text-decoration: none;
        color: #000000;
        transition: opacity 0.25s ease-in-out;
        &:hover {
            opacity: 0.3;
        }
    }
    button {
        cursor: pointer;
    }
    .theme-border {
        width: 100% ;
        height: 6px;
        background: linear-gradient(
            26.57deg,
            #ffc593 0%,
            #bc7198 43.29%,
            #5a77ff 83.33%
        );
        position: absolute;
        display: none;
    }
    .hero-border {
        width: 6px;
        height: 31rem;
        left: 0;
        background: linear-gradient(
            26.57deg,
            #ffc593 0%,
            #bc7198 43.29%,
            #5a77ff 83.33%
        );
        position: absolute;
    }
    .mobile-hero-border {
        width: 13rem;
        height: 6px;
         background: linear-gradient(
            26.57deg,
            #ffc593 0%,
            #bc7198 43.29%,
            #5a77ff 83.33%
        );
        position: absolute;
        top: 0;
        left: 3.5rem;
        display: none;
    }
`;

export default GlobalStyle;
