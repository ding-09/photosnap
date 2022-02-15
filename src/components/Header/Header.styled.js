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
