import styled from 'styled-components';

export const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  .hero-text {
    position: relative;
    z-index: -1;
    padding: 7rem 3rem;
    text-align: left;
    background-color: #000;
    color: #fff;
    h1 {
      text-transform: uppercase;
      font-size: 3.2rem;
      letter-spacing: 0.3rem;
      line-height: 4rem;
    }
    p {
      margin: 2rem 0;
    }
  }

  /* MEDIA QUERIES */

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    .hero-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 5.4rem;
      h1 {
        font-size: 4rem;
        line-height: 4.8rem;
        letter-spacing: 0.4rem;
      }
      p {
        margin: 2rem 0 4.8rem;
      }
    }
    figure {
      order: 2;
    }
  }
`;
