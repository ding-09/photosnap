import { StyledFeatureCard } from './FeatureCard.styled';

const FeatureCard = ({ feature }) => {
  const { img, heading, desc } = feature;
  return (
    <StyledFeatureCard>
      <figure>
        <img src={img} alt={heading} />
      </figure>
      <h2>{heading}</h2>
      <p className='light-text'>{desc}</p>
    </StyledFeatureCard>
  );
};

export default FeatureCard;
