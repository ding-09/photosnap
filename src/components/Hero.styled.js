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
      filter: brightness(0.6);
      margin: 2rem 0;
    }
    button {
      min-width: 60%;
    }
    .hero-border {
      position: absolute;
      top: 0;
      width: 100%;
      max-width: 30%;
      height: 0.5rem;
      background: linear-gradient(
        45deg,
        ${(props) => props.theme.gradientColors.orange},
        ${(props) => props.theme.gradientColors.purple},
        ${(props) => props.theme.gradientColors.blue}
      );
    }
  }
`;
