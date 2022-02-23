import Hero from '../Hero';
import Beta from '../Beta';
import PricingContent from './PricingContent';
import { StyledPricing } from './Pricing.styled';
import { useEffect } from 'react';

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StyledPricing>
      <Hero
        img={PricingContent.heroImg}
        heroHeading={PricingContent.heroHeading}
        heroDesc={PricingContent.heroDesc}
        hasBorder={true}
      />
      <section className="price-card-group">

      </section>
      <section className="price-table"></section>
      <Beta />
    </StyledPricing>
  );
};

export default Pricing;
