import styled from 'styled-components';

export const StyledFooter = styled.footer`
  min-width: 100%;
  padding: 5.6rem 3.2rem;
  background-color: #000;
  button,
  a,
  p {
    color: #fff;
  }
  .footer-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
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

  /* MEDIA QUERIES */
  @media (min-width: 768px) {
    padding: 6.4rem 4rem;
    .footer-container {
      align-items: flex-start;
      .socials {
        order: 3;
        margin-bottom: 0;
      }
      nav ul {
        flex-direction: row;
        li {
          padding-right: 2.6rem;
        }
      }
    }

    .misc-info {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      button {
        margin: 0;
      }
    }
  }

  @media (min-width: 1024px) {
    .socials {
      ul li button {
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;
