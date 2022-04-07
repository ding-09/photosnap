import { StyledPriceCard } from './PriceCard.styled';
import { RectangleButton } from '../../styles/Buttons';
import MainBorder from '../border'

const PriceCard = ({ pricePlan, annual }) => {
  const { tier, desc, monthlyPrice, annualPrice } = pricePlan;
  return (
    <StyledPriceCard proPlan={tier === 'Pro'}>
      {tier === 'Pro' && <MainBorder />}
      <div className='price-plan-desc'>
        <h2>{tier}</h2>
        <p className='light-text'>{desc}</p>
      </div>
      <div className='price-amount'>
        <span className='lg-heading'>
          ${annual ? annualPrice.toFixed(2) : monthlyPrice.toFixed(2)}
        </span>
        <span className='light-text'>per month</span>
      </div>
      <RectangleButton
        innerText='Pick Plan'
        backgroundColor={tier === 'Pro' ? '#fff' : '#000'}
      />
    </StyledPriceCard>
  );
};

export default PriceCard;
