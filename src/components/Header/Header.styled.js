import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  background-color: #fff;
  .mobile-header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.8rem 2.4rem;
    z-index: 999;
    .hamburger-menu {
      span {
        display: block;
        margin: 0.4rem 0;
        width: 2rem;
        height: 0.1rem;
        background-color: #000;
      }
      .open-animation-1 {
        animation-name: openMenu-1;
        animation-duration: 0.7s;
        animation-fill-mode: forwards;
      }
      .open-animation-2 {
        animation-name: openMenu-2;
        animation-duration: 0.7s;
        animation-fill-mode: forwards;
      }
      .close-animation-1 {
        animation-name: closeMenu-1;
        animation-duration: 0.6s;
      }
      .close-animation-2 {
        animation-name: closeMenu-2;
        animation-duration: 0.6s;
      }
    }
    @keyframes openMenu-1 {
      0% {
      }
      100% {
        transform: rotate(45deg) translate(1px, 2px);
      }
    }

    @keyframes openMenu-2 {
      0% {
      }
      100% {
        transform: rotate(-45deg) translate(1px, -3px);
      }
    }

    @keyframes closeMenu-1 {
      0% {
        transform: rotate(45deg) translate(1px, 2px);
      }
      100% {
      }
    }

    @keyframes closeMenu-2 {
      0% {
        transform: rotate(-45deg) translate(1px, -3px);
      }
      100% {
      }
    }

    .nav-modal {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 7rem;
      left: 0;
      background: rgba(0, 0, 0, 0.5);
      nav {
        position: relative;
        background-color: #fff;
        padding: 3rem;
        ul {
          align-items: center;
          border-bottom: 1px solid #979797;
          margin-bottom: 2rem;
        }
        li {
          margin-bottom: 2rem;
        }
        li#footer-only {
          display: none;
        }
        a {
          font-size: 1.5rem;
          color: #000;
        }
        button {
          padding: 1.4rem 0;
        }
      }
    }
  }
`;
