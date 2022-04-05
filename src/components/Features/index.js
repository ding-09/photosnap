import Hero from '../Hero';
import Beta from '../Beta';
import featuresContent from './featuresContent';
import FeatureCard from './FeatureCard';
import { StyledFeatures } from './index.styled';
import { v4 as uuidv4 } from 'uuid';
import ScrollToTop from '../ScrollToTop';

const Features = () => {
  ScrollToTop();

  return (
    <StyledFeatures>
      {/* HERO SECTION */}
      <Hero
        heroImgs={featuresContent.heroImgs}
        heroHeading={featuresContent.heroHeading}
        heroDesc={featuresContent.heroDesc}
        hasBorder={true}
      />
      {/* FEATURES DETAILS */}
      <section className='features features-details'>
        {featuresContent.features.map((feature) => (
          <FeatureCard feature={feature} key={uuidv4()} />
        ))}
      </section>
      <Beta />
    </StyledFeatures>
  );
};

export default Features;
