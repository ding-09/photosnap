import styled from 'styled-components';

// BG IMGS
import bgBeta from '../assets/shared/desktop/bg-beta.jpg';

export const StyledBeta = styled.section`
  background-image: url(${bgBeta});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 28rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
  padding: 0 3rem;
  position: relative;
  h2 {
    text-transform: uppercase;
    font-size: 3.2rem;
    line-height: 4rem;
    letter-spacing: 0.3rem;
  }
  button {
    justify-content: flex-start;
    svg {
      margin-left: 2rem;
    }
  }

  /* MEDIA QUERIES */
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    h2 {
      font-size: 4rem;
      letter-spacing: 0.4rem;
      line-height: 4.8rem;
      flex: 60%;
    }
    button {
      flex: 40%;
      justify-content: flex-end;
      margin-right: 1rem;
      svg {
        margin-left: 0;
      }
    }
    .hero-border {
      height: 100%;
    }
  }
`;
