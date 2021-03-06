import React from 'react';
import styled from 'styled-components';
import ArrowButton from '../styles/ArrowButton';

const StoryCard = ({ data, onHome }) => {
  return (
    <Card img={data.img} mobileImg={data.mobileImg}>
      <div className="theme-border"></div>
      <div className="card-container">
        <div className="text-container">
          {!onHome && <p id="date">{data.date}</p>}
          <h3>{data.title}</h3>
          <p>{data.author}</p>
        </div>
        <ArrowButton title="READ STORY" />
      </div>
    </Card>
  );
};

const Card = styled.article`
  background: url(${(props) => props.img && `${props.img}`}) no-repeat;
  background-position: center;
  background-size: cover;
  color: #ffffff;
  flex: 1 1 35rem;
  height: 50rem;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  overflow-x: hidden;
  transition: 0.25s;
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
        padding-bottom: 1.6rem;
        font-size: 1.3rem;
        line-height: 1.7rem;
      }
      #date {
        padding-bottom: 4px;
      }
    }
  }
  @media (min-width: 769px) {
    &:hover {
      transform: translateY(-2.4rem);
      .theme-border {
        display: block;
      }
    }
  }
  @media (max-width: 375px) {
    flex: 1 1 37.5rem;
    height: 37.5rem;
    background: url(${(props) => props.mobileImg && `${props.mobileImg}`})
      no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export default StoryCard;
