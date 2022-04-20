import styled from 'styled-components';

export const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  figure {
    img {
      width: 100%;
      height: 30rem;
    }
  }
  .hero-text-container {
    position: relative;
    padding: 7rem 3rem;
    text-align: left;
    background-color: #000;
    color: #fff;
    .hero-text {
      h1 {
        text-transform: uppercase;
        font-size: 3.2rem;
        letter-spacing: 0.3rem;
        line-height: 4rem;
      }
      p {
        margin: 2rem 0;
      }
      a span {
        padding-right: ${(props) => (props.storiesBtn ? '1.6rem' : '1.8rem')};
      }
    }
  }

  /* MEDIA QUERIES */

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    min-height: 50rem;
    .hero-text-container {
      display: flex;
      align-items: center;
      padding: 0;
      .hero-text {
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 0 4.8rem;
        max-width: 49.5rem;
        h1 {
          font-size: 4rem;
          line-height: 4.8rem;
          letter-spacing: 0.4rem;
        }
        p {
          margin: 2rem 0 ${(props) => (props.hasLink ? '4.8rem' : '0')};
        }
      }
    }
    figure {
      flex-basis: 27rem;
      order: 2;
      img {
        height: 100%;
      }
    }
  }

  @media (min-width: 1024px) {
    .hero-text {
      flex: 50%;
    }
    figure {
      flex: 50%;
    }
  }

  @media (min-width: 1200px) {
    .hero-text {
      flex: 45%;
    }
    figure {
      flex: 55%;
    }
  }
`;
