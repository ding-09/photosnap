import styled from 'styled-components';

export const StyledFooter = styled.footer`
  min-width: 100%;
  padding: 5.6rem 3.2rem;
  background-color: #000;
  display: flex;
  align-items: center;
  flex-direction: column;
  button,
  a,
  p {
    color: #fff;
  }
  .logo {
    margin-bottom: 3rem;
    svg {
      g {
        path {
          &:first-child {
            fill: #fff;
          }
        }
      }
    }
  }
  .socials {
    margin-bottom: 5rem;
    ul {
      display: flex;
      align-items: flex-end;
    }
    button {
      background-color: inherit;
      padding: 0 0.7rem;
      svg {
        path {
          fill: #fff;
        }
      }
    }
  }
  nav {
    margin-bottom: 8.5rem;
    ul {
      align-items: center;
      li {
        margin-bottom: 1.5rem;
      }
    }
    button {
      display: none;
    }
  }
  .misc-info {
    button {
      margin: 0 auto 3rem;
    }
    .copyright {
      opacity: 0.5;
    }
  }
`;
