import React from 'react';
import styled from 'styled-components';
import ArrowButton from '../styles/ArrowButton';
import betaBG from '../assets/shared/desktop/bg-beta.jpg';
import tabletBG from '../assets/shared/tablet/bg-beta.jpg'
import mobileBetaBG from '../assets/shared/mobile/bg-beta.jpg';

const BetaInvite = () => {
  return (
    <InviteSection>
      <div className="hero-border"></div>
      <div className="invite-container">
        <h2 className="heading">
          WE'RE IN BETA. <br></br>GET YOUR INVITE TODAY!
        </h2>
        <ArrowButton title="GET AN INVITE" />
      </div>
    </InviteSection>
  );
};

const InviteSection = styled.section`
  background: url(${betaBG}) no-repeat;
  background-size: cover;
  background-position: center;
  padding: 6.4rem 4.9rem;
  position: relative;
  color: #ffffff;
  @media (max-width: 700px) {
    padding: 5rem 4rem;
    height: auto;
    background: url(${tabletBG}) no-repeat;
  }
  @media (max-width: 400px) {
    max-width: 40rem;
    height: 25rem;
    padding: 2rem 3rem; 
    background: url(${mobileBetaBG}) no-repeat;
    background-size: cover;
    background-position: center;
    .hero-border {
      display: none;
    }
    .invite-container {
      h2 {
        font-size: 2.6rem;
        line-height: 4rem;
        letter-spacing: 3.3px;
      }
    }
  }
  .invite-container {
    max-width: 114rem;
    height: 15rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
    h2 {
      max-width: 45rem;
    }
    @media (max-width: 700px) {
      height: 100%;
      flex-direction: column;
      justify-content: space-evenly;
      h2 {
        margin-bottom: 2rem;
      }
      button {
        width: 20rem;
      }
    }
  }
  .hero-border {
    height: 100%;
    top: 0;
  }
`;

export default BetaInvite;
