import Hero from '../Hero';
import Beta from '../Beta';
import PriceCard from './PriceCard'
import PriceTable from './PriceTable'
import PricingContent from './PricingContent';
import { StyledPricing } from './index.styled';
import { useEffect } from 'react';
import { v4 as uuidv4} from 'uuid';

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
  }

  const {pricing} = PricingContent;

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
        <section className="price-cards">
          {pricing.map(pricePlan => <PriceCard pricePlan={pricePlan} key={uuidv4()}/>)}
        </section>
      </section>
      <section className='price-table'>
        <PriceTable features={PricingContent.features}/>
      </section>
      <Beta />
    </StyledPricing>
  );
};

export default Pricing;
