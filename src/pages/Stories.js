import React from 'react';
import styled from 'styled-components';
import heroImage from '../assets/stories/desktop/moon-of-appalacia.jpg';
import tabletHeroImage from '../assets/stories/tablet/moon-of-appalacia.jpg';
import ArrowButton from '../styles/ArrowButton';
import StoryData from '../components/StoryData';
import StoryCard from '../components/StoryCard';

const Stories = () => {
  return (
    <main>
      <HeroSection>
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
  .hero-text {
    width: 38rem;
    height: 40.6rem;
    min-width: 38rem;
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
  grid-template-columns: repeat(auto-fit, minmax(36rem,1fr));
  grid-template-rows: auto;
`;

export default Stories;
