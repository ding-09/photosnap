import styled from 'styled-components';

export const StyledFooter = styled.footer`
  min-width: 100%;
  padding: 5.6rem 3.2rem;
  background-color: #000;
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
    & > a {
      display: none;
    }
  }
  .misc-info {
    a {
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
      a {
        margin: 0;
      }
    }
  }

  @media (min-width: 1024px) {
    .footer-container {
      flex-direction: row;
      max-height: 15rem;
      .logo {
        margin-right: 11rem;
      }
      .socials {
        position: absolute;
        bottom: 0;
        ul li a {
          &:hover {
            cursor: pointer;
          }
        }
      }
      nav {
        ul {
          flex-direction: column;
          align-items: flex-start;
          li {
            padding-right: 0;
          }
        }
      }
    }
  }

  @media (min-width: 1200px) {
    padding: 6.5rem 12rem;
  }
`;
