import Hero from '../Hero';
import FeaturesContent from './FeaturesContent';

const index = () => {
  return (
    <>
      <Hero
        img={FeaturesContent.heroImg}
        heroHeading={FeaturesContent.heroHeading}
        heroDesc={FeaturesContent.heroDesc}
        hasBorder={true}
      />
    </>
  );
};

export default index;
