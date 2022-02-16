import styled from 'styled-components';

export const StyledBeta = styled.section`
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 28rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
  padding: 0 3rem;
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
`;
