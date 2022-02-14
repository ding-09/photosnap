import { StyledHero } from './Hero.styled';

const Hero = () => {
  return (
    <StyledHero>
      <figure>
        <img src='' alt='Hero' />
      </figure>
      <div className='hero-text'>
        <h1>Hero Text</h1>
        <p>Hero Description</p>
      </div>
      <div className="hero-border">Colorful Border</div>
    </StyledHero>
  );
};

export default Hero;
