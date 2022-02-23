import Hero from '../Hero';
import Beta from '../Beta';
import featuresContent from './featuresContent';
import FeatureCard from './FeatureCard';
import { StyledFeatures } from './Features.styled';
import { useEffect } from 'react';

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
          <FeatureCard feature={feature} />
        ))}
      </section>
      <Beta />
    </StyledFeatures>
  );
};

export default Features;
