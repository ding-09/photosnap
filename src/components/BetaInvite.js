import React from 'react';
import styled from 'styled-components';
import ArrowButton from '../styles/ArrowButton';
import betaBG from '../assets/shared/desktop/bg-beta.jpg';
import tabletBetaBG from '../assets/shared/tablet/bg-beta.jpg';


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
  .invite-container {
    max-width: 114rem;
    height: 15rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
    h2 {
      max-width: 45rem;
    }
  }
  .hero-border {
    height: 100%;
    top: 0;
  }
`;

export default BetaInvite;
