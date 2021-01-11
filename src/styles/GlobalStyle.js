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
    }
    body {
        font-family: 'DM Sans', sans-serif;
    }
    h1 {
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
    }
    button {
        cursor: pointer;
    }
`;

export default GlobalStyle;
