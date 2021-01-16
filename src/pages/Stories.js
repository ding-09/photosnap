import React from 'react';
import styled from 'styled-components';
import heroImage from '../assets/stories/desktop/moon-of-appalacia.jpg';
import tabletHeroImage from '../assets/stories/tablet/moon-of-appalacia.jpg';
import mobileHeroImage from '../assets/stories/mobile/moon-of-appalacia.jpg';
import ArrowButton from '../styles/ArrowButton';
import StoryData from '../components/StoryData';
import StoryCard from '../components/StoryCard';

const Stories = () => {
  return (
    <main>
      <HeroSection>
        <section className="mobile-hero-image">

        </section>
        <section className="hero-text">
          <h4>LAST MONTH’S FEATURED STORY</h4>
          <h1>HAZY FULL MOON OF APPALACHIA</h1>
          <p id="author">
            <span>March 2nd 2020 &nbsp;</span>
            by John Appleseed
          </p>
          <p id="summary">
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called "mountains," especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </p>
          <ArrowButton title="READ THE STORY" />
        </section>
      </HeroSection>
      <StoryGrid>
        {StoryData.map((data, index) => (
          <StoryCard data={data} key={index} />
        ))}
      </StoryGrid>
    </main>
  );
};

const HeroSection = styled.section`
  min-height: 65rem;
  padding-left: 8%;
  background: url(${heroImage}) no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    background: url(${tabletHeroImage}) no-repeat;
    padding-left: 4rem;
  }
  @media (max-width: 450px) {
    background: #000000;
    min-height: 50rem;
    padding: 0;
    flex-direction: column;
    .mobile-hero-image {
      width: 100%;
      min-height: 32rem;
      background: url(${mobileHeroImage}) no-repeat;
      background-position: center;
      background-size: cover;
    }
    .hero-text {
      min-width: 31rem;
      margin: 0 auto;
      padding: 2rem 3rem;
      h1 {
        font-size: 3.2rem;
        line-height: 4rem;
        letter-spacing: 3.3px;
      }
    }
  }
  .hero-text {
    width: 37.5rem;
    min-height: 40.6rem;
    color: #ffffff;
    h1 {
      margin-top: 2.4rem;
      margin-bottom: 1.6rem;
    }
    #author {
      font-size: 1.3rem;
      line-height: 1.7rem;
      span {
        opacity: 0.75;
      }
    }
    #summary {
      margin: 2.4rem 0;
      opacity: 0.6;
    }
  }
`;

const StoryGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(36rem, 1fr));
  grid-template-rows: auto;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export default Stories;
