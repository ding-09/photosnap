import Hero from '../Hero';
import Beta from '../Beta';
import PriceCard from './PriceCard';
import PriceTable from './PriceTable';
import PricingContent from './PricingContent';
import { StyledPricing } from './index.styled';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Pricing = () => {
  const { pricing } = PricingContent;

  const [annual, setAnnual] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    setAnnual(!annual);
  };

  return (
    <StyledPricing>
      <Hero
        img={PricingContent.heroImg}
        heroHeading={PricingContent.heroHeading}
        heroDesc={PricingContent.heroDesc}
        hasBorder={true}
      />
      <section className='price-card-group'>
        <div className='price-plan-toggle'>
          <label>Monthly</label>
          <div className='checkbox'>
            <input type='checkbox' onClick={handleClick} />
            <span className='slider'></span>
          </div>
          <label>Yearly</label>
        </div>
        <section className='price-cards'>
          {pricing.map((pricePlan) => (
            <PriceCard
              pricePlan={pricePlan}
              key={uuidv4()}
              annual={annual}
            />
          ))}
        </section>
      </section>
      <section className='price-table'>
        <PriceTable features={PricingContent.features} />
      </section>
      <Beta />
    </StyledPricing>
  );
};

export default Pricing;
