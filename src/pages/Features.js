import React, { useEffect } from 'react';
import styled from 'styled-components';
import heroImage from '../assets/features/desktop/hero.jpg';
import tabletHeroImage from '../assets/features/tablet/hero.jpg';
import responsiveIcon from '../assets/features/desktop/responsive.svg';
import noLimitIcon from '../assets/features/desktop/no-limit.svg';
import embedIcon from '../assets/features/desktop/embed.svg';
import domainIcon from '../assets/features/desktop/custom-domain.svg';
import exposureIcon from '../assets/features/desktop/boost-exposure.svg';
import dragDropIcon from '../assets/features/desktop/drag-drop.svg';
import BetaInvite from '../components/BetaInvite';

const Features = ({ setOnFeatures }) => {
  useEffect(() => {
    // set to true on mount to change header button
    setOnFeatures(true);

    // set back to false on unmount to change back to original header button
    return () => {
      setOnFeatures(false);
    };
  }, [setOnFeatures]);

  return (
    <main>
      <HeroSection>
        <HeroText>
          <div className="hero-border"></div>
          <div className="text-container">
            <h1>FEATURES</h1>
            <p>
              We make sure all of our features are designed to be loved by every
              aspiring and even professional photograpers who wanted to share
              their stories.
            </p>
          </div>
        </HeroText>
        <HeroImage>
          <figure></figure>
        </HeroImage>
      </HeroSection>
      <FeaturesSection>
        <div className="features-container">
          <article>
            <img src={responsiveIcon} alt="icon" />
            <h3>100% Responsive</h3>
            <p>
              No matter which the device you’re on, our site is fully responsive
              and stories look beautiful on any screen.
            </p>
          </article>
          <article className="middle-feature">
            <img src={noLimitIcon} alt="icon" />
            <h3>No Photo Upload Limit</h3>
            <p>
              Our tool has no limits on uploads or bandwidth. Freely upload in
              bulk and share all of your stories in one go.
            </p>
          </article>
          <article>
            <img src={embedIcon} alt="icon" />
            <h3>Available to Embed</h3>
            <p>
              Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
              videos, Google Maps, and more.
            </p>
          </article>
          <article>
            <img src={domainIcon} alt="icon" />
            <h3>Custom Domain</h3>
            <p>
              With Photosnap subscriptions you can host your stories on your own
              domain. You can also remove our branding!
            </p>
          </article>
          <article>
            <img src={exposureIcon} alt="icon" />
            <h3>Boost Your Exposure</h3>
            <p>
              Users that viewed your story or gallery can easily get notifed of
              new and featured stories with our built in mailing list.
            </p>
          </article>
          <article>
            <img src={dragDropIcon} alt="icon" />
            <h3>Drag &amp; Drop Image</h3>
            <p>
              Easily drag and drop your image and get beautiful shots everytime.
              No over the top tooling to add friction to creating stories.
            </p>
          </article>
        </div>
      </FeaturesSection>
      <BetaInvite />
    </main>
  );
};

const HeroSection = styled.section`
  display: flex;
  height: 49rem;
`;

const HeroText = styled.article`
  background: #000000;
  color: #ffffff;
  flex: 1 1 61rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .hero-border {
    height: 14.4rem;
  }
  .text-container {
    min-width: 38rem;
    width: 40rem;
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
`;

const HeroImage = styled.article`
  flex: 1 1 83rem;
  height: 100%;
  figure {
    width: 100%;
    height: 100%;
    background: url(${heroImage});
    background-size: cover;
    background-position: center;
    @media (max-width: 768px) {
      background: url(${tabletHeroImage});
    }
  }
`;

const FeaturesSection = styled.section`
  max-width: 112rem;
  height: auto;
  margin: 16rem auto;
  padding: 0 2rem;
  @media (max-width: 768px) {
    margin: 11rem auto;
  }
  .features-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
    grid-template-rows: auto;
    grid-row-gap: 5rem;
    grid-column-gap: 1rem;
  }
  article {
    text-align: center;
    h3 {
      margin-top: 4.8rem;
      margin-bottom: 1.6rem;
    }
    p {
      opacity: 0.6;
    }
  }
  .middle-feature {
    img {
      margin: 1.8rem 0;
    }
  }
`;

export default Features;
