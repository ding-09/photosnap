import styled from 'styled-components';

export const StyledStoryCard = styled.article`
  min-height: 37.5rem;
  padding: 4rem 4rem 4.5rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1rem;
  color: #fff;
  .text-container {
    border-bottom: 2px solid rgba(256, 256, 256, 0.25);
    padding-bottom: 1.5rem;
    .date,
    .author {
      font-size: 1.3rem;
    }
    h2 {
      padding: 0.4rem 0;
      font-size: 1.8rem;
    }
  }
  button {
    margin-top: 2rem;
    justify-content: space-between;
  }
`;
