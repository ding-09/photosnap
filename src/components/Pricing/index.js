import Hero from '../Hero';
import Beta from '../Beta';
import PriceCard from './PriceCard';
import PriceTable from './PriceTable';
import PricingContent from './pricingContent';
import { StyledPricing } from './index.styled';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ScrollToTop from '../ScrollToTop';

const Pricing = () => {
  ScrollToTop();

  const { pricing } = PricingContent;

  // STATE AND FUNC TO TOGGLE MONTHLY AND ANNUAL PRICING
  const [annual, setAnnual] = useState(false);

  const handleClick = () => {
    setAnnual(!annual);
  };

  return (
    <StyledPricing>
      <Hero
        heroImgs={PricingContent.heroImgs}
        heroHeading={PricingContent.heroHeading}
        heroDesc={PricingContent.heroDesc}
        hasBorder={true}
      />

      {/* PRICING CARDS */}
      <section className='price-card-group'>
        <div className='price-plan-toggle'>
          <label className={annual ? 'inactive-label' : ''}>Monthly</label>
          <div className='checkbox'>
            <input type='checkbox' onClick={handleClick} />
            <span className='slider'></span>
          </div>
          <label className={annual ? '' : 'inactive-label'}>Yearly</label>
        </div>
        <section className='price-cards'>
          {pricing.map((pricePlan) => (
            <PriceCard pricePlan={pricePlan} key={uuidv4()} annual={annual} />
          ))}
        </section>
      </section>

      {/* PRICING TABLE */}
      <section className='price-table'>
        <PriceTable features={PricingContent.features} />
      </section>
      <Beta />
    </StyledPricing>
  );
};

export default Pricing;
