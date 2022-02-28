import Hero from '../Hero';
import storiesContent from './storiesContent';
import { StyledStories } from './index.styled';
import StoryCard from './StoryCard';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Stories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StyledStories>
      <Hero
        img={storiesContent.heroImg}
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
