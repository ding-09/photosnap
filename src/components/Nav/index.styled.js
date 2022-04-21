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
        background-color: #fff;
        transition: opacity 0.1s ease;
      }
    }
    .active {
      opacity: 0.3;
      pointer-events: none;
    }
    a {
      &:hover {
        background-color: #dfdfdf;
        color: #000;
        cursor: pointer;
        transition: background-color 0.1s ease;
      }
    }
  }
`;
