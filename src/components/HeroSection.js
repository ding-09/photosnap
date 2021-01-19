import React from 'react';
import styled from 'styled-components';

const HeroSection = ({
  title,
  description,
  heroImage,
  tabletHeroImage,
  mobileHeroImage,
}) => {
  return (
    <Hero>
      <HeroText>
        <div className="hero-border"></div>
        <div className="mobile-hero-border"></div>
        <div className="text-container">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </HeroText>
      <HeroImage
        heroImage={heroImage}
        tabletHeroImage={tabletHeroImage}
        mobileHeroImage={mobileHeroImage}
      >
        <figure></figure>
      </HeroImage>
    </Hero>
  );
};

export default HeroSection;

const Hero = styled.section`
  display: flex;
  height: 49rem;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
    height: 60rem;
  }
`;

const HeroText = styled.article`
  background: #000000;
  color: #ffffff;
  flex: 1 1 61rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .hero-border {
    height: 14.4rem;
  }
  .text-container {
    min-width: 37.5rem;
    height: 15rem;
    margin: 5rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      margin-bottom: 4.2rem;
      opacity: 0.6;
    }
  }
  @media (max-width: 600px) {
    flex: 1 1 50%;
  }
  @media (max-width: 500px) {
    flex: 1 1 45%;
    .hero-border {
      display: none;
    }
    .text-container {
      padding: 0 3rem;
      margin: 0 2rem;
      h1 {
          margin-bottom: 1.6rem;
      }
    }
  }
  @media (max-width: 375px) {
    .mobile-hero-border {
      display: block;
      left: 3rem;
    }
  }
`;

const HeroImage = styled.article`
  flex: 1 1 83rem;
  figure {
    width: 100%;
    height: 100%;
    background: url(${(props) => props.heroImage}) no-repeat;
    background-size: cover;
    background-position: center;
  }
  @media (max-width: 768px) {
    figure {
      background: url(${(props) => props.tabletHeroImage}) no-repeat;
      background-size: cover;
      background-position: center;
    }
  }
  @media (max-width: 600px) {
    flex: 1 1 50%;
    figure {
      background: url(${(props) => props.mobileHeroImage}) no-repeat;
    }
  }
`;
