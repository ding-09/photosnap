import { StyledPriceCard } from './PriceCard.styled';
import { RectangleButton } from '../../styles/Buttons';

const PriceCard = ({ pricePlan }) => {
  const { tier, desc, monthlyPrice, annualPrice } = pricePlan;
  return (
    <StyledPriceCard>
      <div className='price-plan-desc'>
        <h2>{tier}</h2>
        <p className='light-text'>{desc}</p>
      </div>
      <div className='price-amount'>
        <span className='lg-heading'>${monthlyPrice.toFixed(2)}</span>
        <span className='light-text'>per month</span>
      </div>
      <RectangleButton innerText='Pick Plan' />
    </StyledPriceCard>
  );
};

export default PriceCard;
