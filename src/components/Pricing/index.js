import Hero from '../Hero';
import Beta from '../Beta';
import PricingContent from './PricingContent';
import { StyledPricing } from './index.styled';
import { useEffect } from 'react';

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    console.log('Clicked')
  }

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
      </section>
      <section className='price-table'></section>
      <Beta />
    </StyledPricing>
  );
};

export default Pricing;
