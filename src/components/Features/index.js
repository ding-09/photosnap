import Hero from '../Hero';
import Beta from '../Beta';
import featuresContent from './featuresContent';
import FeatureCard from './FeatureCard';
import { StyledFeatures } from './index.styled';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Features = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <StyledFeatures>
      <Hero
        img={featuresContent.heroImg}
        heroHeading={featuresContent.heroHeading}
        heroDesc={featuresContent.heroDesc}
        hasBorder={true}
      />
      <section className='features'>
        {featuresContent.features.map((feature) => (
          <FeatureCard feature={feature} key={uuidv4()} />
        ))}
      </section>
      <Beta />
    </StyledFeatures>
  );
};

export default Features;
