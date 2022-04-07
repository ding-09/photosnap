import { StyledHero } from './Hero.styled';
import { ArrowButton } from '../styles/Buttons';
import MainBorder from './border'
import Picture from './Picture';

const Hero = ({
  heroImgs,
  heroHeading,
  heroDesc,
  hasBorder = false,
  hasLink = false,
  linkText,
  stories = false,
}) => {
  return (
    <StyledHero onStories={stories}>
      <figure>
        <Picture imgs={heroImgs} />
      </figure>
      <div className='hero-text'>
        <MainBorder />
        {stories && <p>Last Month's Featured Story</p>}
        <h1>{heroHeading}</h1>
        {stories && (
          <p className='story-info'>
            <span className='light-text'>March 2nd 2020 </span>
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
