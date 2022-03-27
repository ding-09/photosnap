import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  ul {
    flex-direction: column;
  }

  /* MEDIA QUERIES */
  @media (min-width: 1024px) {
    ul li a {
      &:hover:not(.active) {
        opacity: 0.3;
      }
    }
    .active {
      opacity: 0.3;
      pointer-events: none;
    }
    button {
      &:hover {
        background-color: #dfdfdf;
        color: #000;
        cursor: pointer;
      }
    }
  }
`;
