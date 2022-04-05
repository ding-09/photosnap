import Hero from '../Hero';
import storiesContent from './storiesContent';
import ScrollToTop from '../ScrollToTop';
import { StyledStories } from './index.styled';
import StoryCard from './StoryCard';
import { v4 as uuidv4 } from 'uuid';

const Stories = () => {
  ScrollToTop();

  return (
    <StyledStories>
      <Hero
        heroImgs={storiesContent.heroImgs}
        heroHeading={storiesContent.heroHeading}
        heroDesc={storiesContent.heroDesc}
        hasLink={true}
        linkText='Read the story'
        stories={true}
      />
      <section className='stories'>
        {storiesContent.stories.map((story) => (
          <StoryCard story={story} key={uuidv4()}/>
        ))}
      </section>
    </StyledStories>
  );
};

export default Stories;
