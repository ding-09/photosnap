import Hero from '../Hero';
import homeContent from './homeContent';
import { StyledHome } from './index.styled';
import Details from './Details';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import storiesContent from '../stories/storiesContent';
import featuresContent from '../features/featuresContent';
import StoryCard from '../stories/StoryCard';
import FeatureCard from '../features/FeatureCard';

const Home = () => {
  const { stories } = storiesContent;
  const { features } = featuresContent;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StyledHome>
      <section className='main-content'>
        <Hero
          heroImgs={homeContent.heroImgs}
          heroHeading={homeContent.heroHeading}
          heroDesc={homeContent.heroDesc}
          hasBorder={true}
          hasLink={true}
          linkText='Get an invite'
        />
        {homeContent.subDetails.map((details) => (
          <Details details={details} key={uuidv4()} />
        ))}
      </section>
      <section className='stories'>
        {stories.slice(0, 4).map((story) => (
          <StoryCard story={story} key={uuidv4()} />
        ))}
      </section>
      <section className='features'>
        {features.slice(0, 3).map((feature) => (
          <FeatureCard feature={feature} key={uuidv4()} />
        ))}
      </section>
    </StyledHome>
  );
};

export default Home;
