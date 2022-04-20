import { StyledHero } from './Hero.styled';
import { ArrowButton } from '../styles/Buttons';
import MainBorder from './border';
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
    <StyledHero storiesBtn={stories} hasLink={hasLink}>
      <figure>
        <Picture imgs={heroImgs} />
      </figure>
      <section className='hero-text-container'>
        <div className='hero-text'>
          {hasBorder && <MainBorder />}
          {stories && <p>Last Month's Featured Story</p>}
          <h1>{heroHeading}</h1>
          {stories && (
            <p className='story-info'>
              <span className='light-text'>March 2nd 2020 </span>
              <span> by John Appleseed</span>
            </p>
          )}
          <p className='light-text'>{heroDesc}</p>
          {hasLink && <ArrowButton innerText={linkText} color='#fff' />}
        </div>
      </section>
    </StyledHero>
  );
};

export default Hero;
