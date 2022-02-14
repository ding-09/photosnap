import { StyledHero } from './Hero.styled';

const Hero = ({ img, heroHeading, heroDesc }) => {
  return (
    <StyledHero>
      <figure>
        <img src={img} alt='Hero' />
      </figure>
      <div className='hero-text'>
        <h1>{heroHeading}</h1>
        <p>{heroDesc}</p>
      </div>
      <div className='hero-border'>Colorful Border</div>
    </StyledHero>
  );
};

export default Hero;
