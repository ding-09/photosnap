import { StyledHero } from './Hero.styled';
import { ArrowButton } from '../styles/Buttons'

const Hero = ({ img, heroHeading, heroDesc }) => {
  return (
    <StyledHero>
      <figure>
        <img src={img} alt='Hero' />
      </figure>
      <div className='hero-text'>
        <h1>{heroHeading}</h1>
        <p>{heroDesc}</p>
        <div className='hero-border'></div>
        <ArrowButton innerText={'Get an invite'} color='#fff'/>
      </div>
    </StyledHero>
  );
};

export default Hero;
