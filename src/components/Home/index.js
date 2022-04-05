import Hero from '../Hero';
import Details from './Details';
import homeContent from './homeContent';
import storiesContent from '../stories/storiesContent';
import featuresContent from '../features/featuresContent';
import StoryCard from '../stories/StoryCard';
import FeatureCard from '../features/FeatureCard';
import { StyledHome } from './index.styled';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  const { stories } = storiesContent;
  const { features } = featuresContent;
  const { subDetails } = homeContent;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StyledHome>
      {/* HERO SECTION */}
      <section className='main-content'>
        <Hero
          heroImgs={homeContent.heroImgs}
          heroHeading={homeContent.heroHeading}
          heroDesc={homeContent.heroDesc}
          hasBorder={true}
          hasLink={true}
          linkText='Get an invite'
        />
        
        {/* SUBDETAILS SECTION */}
        {subDetails.map((details) => (
          <Details details={details} key={uuidv4()} />
        ))}
      </section>

      {/* STORIES SECTION */}
      <section className='stories'>
        {stories.slice(0, 4).map((story) => (
          <StoryCard story={story} key={uuidv4()} />
        ))}
      </section>

      {/* FEATURES SECTION */}
      <section className='features'>
        {features.slice(0, 3).map((feature) => (
          <FeatureCard feature={feature} key={uuidv4()} />
        ))}
      </section>
    </StyledHome>
  );
};

export default Home;
