import { StyledHero } from './Hero.styled';
import { ArrowButton } from '../styles/Buttons';

const Hero = ({
  img,
  heroHeading,
  heroDesc,
  hasBorder = false,
  hasLink = false,
  linkText,
  stories = false,
}) => {
  return (
    <StyledHero>
      <figure>
        <img src={img} alt='Hero' />
      </figure>
      <div className='hero-text'>
        {stories && <p>Last Month's Featured Story</p>}
        <h1>{heroHeading}</h1>
        {stories && (
          <p className='light-text'>
            <span>March 2nd 2020</span>
            <span> by John Appleseed</span>
          </p>
        )}
        <p className='light-text'>{heroDesc}</p>
        {hasBorder && <div className='hero-border'></div>}
        {hasLink && <ArrowButton innerText={linkText} color='#fff' />}
      </div>
    </StyledHero>
  );
};

export default Hero;
