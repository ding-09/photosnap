import React from 'react';
import styled from 'styled-components';
import ArrowButton from '../styles/ArrowButton';

const StoryCard = ({ data }) => {
  return (
    <Card img={data.img}>
      <div className="card-container">
        <div className="text-container">
          <h3>{data.title}</h3>
          <p>{data.author}</p>
        </div>
        <ArrowButton title="READ STORY"/>
      </div>
    </Card>
  );
};

const Card = styled.article`
  background: url(${(props) => props.img && `${props.img}`}) no-repeat;
  background-position: center;
  background-size: cover;
  color: white;
  flex: 1 1 36rem;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  .card-container {
    width: 100%;
    height: 70%;
    padding: 0 4rem 4rem;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.0001) 0.27%,
      rgba(0, 0, 0, 0.661222) 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    .text-container {
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid rgba(255, 255, 255, 0.25);
        margin-bottom: 2rem;
        p {
            padding-top: 4px;
            padding-bottom: 1.5rem;
            font-size: 1.3rem;
            line-height: 1.7rem;
        }
    }
  }
`;

export default StoryCard;
