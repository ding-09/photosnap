import React, { useEffect } from 'react';
import styled from 'styled-components';
import BetaInvite from '../components/BetaInvite';
import HeroSection from '../components/HeroSection';

// images and icons
import heroImage from '../assets/features/desktop/hero.jpg';
import tabletHeroImage from '../assets/features/tablet/hero.jpg';
import mobileHeroImage from '../assets/features/mobile/hero.jpg';
import responsiveIcon from '../assets/features/desktop/responsive.svg';
import noLimitIcon from '../assets/features/desktop/no-limit.svg';
import embedIcon from '../assets/features/desktop/embed.svg';
import domainIcon from '../assets/features/desktop/custom-domain.svg';
import exposureIcon from '../assets/features/desktop/boost-exposure.svg';
import dragDropIcon from '../assets/features/desktop/drag-drop.svg';

const Features = ({ setOnFeatures }) => {
  useEffect(() => {
    // set to true on mount to change Header button specific to Features page
    setOnFeatures(true);

    // set back to false on unmount to change back to original Header button
    return () => {
      setOnFeatures(false);
    };
  }, [setOnFeatures]);

  return (
    <main>
      <HeroSection
        title="FEATURES"
        description="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
        heroImage={heroImage}
        tabletHeroImage={tabletHeroImage}
        mobileHeroImage={mobileHeroImage}
      />
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

const FeaturesSection = styled.section`
  max-width: 112rem;
  height: auto;
  margin: 16rem auto;
  padding: 0 2rem;
  @media (max-width: 768px) {
    margin: 11rem auto;
    padding: 0 4rem;
  }
  .features-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
    grid-template-rows: auto;
    grid-row-gap: 5rem;
    grid-column-gap: 1rem;
    @media (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: auto;
    }
  }
  article {
    text-align: center;
    padding: 0 2rem;
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
