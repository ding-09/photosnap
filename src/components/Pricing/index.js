import Hero from '../Hero';
import PricingContent from './PricingContent';

const index = () => {
  return (
    <>
      <Hero
        img={PricingContent.heroImg}
        heroHeading={PricingContent.heroHeading}
        heroDesc={PricingContent.heroDesc}
        hasBorder={true}
      />
    </>
  );
};

export default index;

