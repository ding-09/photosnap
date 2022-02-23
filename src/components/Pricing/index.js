import Hero from '../Hero';
import PricingContent from './PricingContent';
import { useEffect } from 'react';

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

export default Pricing;
