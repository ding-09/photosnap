import Hero from '../Hero';
import Beta from '../Beta';
import featuresContent from './featuresContent';
import FeatureCard from './FeatureCard';
import { StyledFeatures } from './Features.styled';

const index = () => {
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

export default index;
