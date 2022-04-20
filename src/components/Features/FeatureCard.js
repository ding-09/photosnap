import { StyledFeatureCard } from './FeatureCard.styled';

const FeatureCard = ({ feature }) => {
  const { img, heading, desc } = feature;
  return (
    <StyledFeatureCard>
      <figure
        className={heading === 'No Photo Upload Limit' ? 'photo-limit' : ''}
      >
        <img src={img} alt={heading} />
      </figure>
      <div className='feature-desc'>
        <h2>{heading}</h2>
        <p className='light-text'>{desc}</p>
      </div>
    </StyledFeatureCard>
  );
};

export default FeatureCard;
