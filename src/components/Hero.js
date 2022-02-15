import { StyledHero } from './Hero.styled';
import { ArrowButton } from '../styles/Buttons';

const Hero = ({ img, heroHeading, heroDesc, hasBorder, hasLink, linkText }) => {
  return (
    <StyledHero>
      <figure>
        <img src={img} alt='Hero' />
      </figure>
      <div className='hero-text'>
        <h1>{heroHeading}</h1>
        <p>{heroDesc}</p>
        {hasBorder && <div className='hero-border'></div>}
        {hasLink && <ArrowButton innerText={linkText} color='#fff' />}
      </div>
    </StyledHero>
  );
};

export default Hero;
