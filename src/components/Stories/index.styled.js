import styled from 'styled-components';

export const StyledStories = styled.section`
  section:first-child {
    figure {
      img {
        object-position: 60%;
      }
    }
    .hero-text {
      p:first-child {
        font-size: 1.2rem;
        letter-spacing: 0.2rem;
        font-weight: bold;
        text-transform: uppercase;
      }
    }
    .story-info {
      font-size: 1.3rem;
    }
  }

  /* MEDIA QUERIES */
  @media (min-width: 768px) {
    section:first-child {
      display: flex;
      align-items: center;
      position: relative;
      figure {
        flex-basis: 100%;
      }
      .hero-text-container {
        position: absolute;
        z-index: 99;
        left: 0;
        max-width: 65%;
        margin-bottom: 5rem;
        background-color: transparent;
        p {
          margin-bottom: 2.4rem;
        }
        .story-info {
          margin: 1.6rem 0 0.4rem;
        }
      }
    }
  }
`;
