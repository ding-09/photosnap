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
  gap: 2rem;
  color: #fff;
  .text-container {
    border-bottom: 1px solid #979797;
    padding-bottom: 1.5rem;
    .date, .author {
        font-size: 1.3rem;
    }
    h2 {
        padding: 0.4rem 0;
        font-size: 1.8rem;
    }
  }
`;
