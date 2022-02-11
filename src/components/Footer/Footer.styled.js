import styled from 'styled-components';

export const StyledFooter = styled.footer`
  border: 1px solid red;
  min-width: 100%;
  background-color: #000;
  .logo {
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
    button {
      background-color: inherit;
      svg {
        path {
          fill: #fff;
        }
      }
    }
  }
`;
