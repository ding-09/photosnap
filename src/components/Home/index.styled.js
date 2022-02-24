import styled from 'styled-components';

export const StyledHome = styled.section`
  display: flex;
  flex-direction: column;
  .home-content .sub-details {
    .text-details {
      padding: 7rem 3rem;
    }
    h2 {
      max-width: 85%;
      font-size: 3.2rem;
      letter-spacing: 0.3rem;
      line-height: 4rem;
      text-transform: uppercase;
    }
    p {
      margin: 1.5rem 0 2rem;
    }
  }
`;
