import Hero from '../Hero';
import storiesContent from './storiesContent';
import { StyledStories } from './Stories.styled';
import StoryCard from './StoryCard';
import { useEffect } from 'react';

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
          <StoryCard story={story} />
        ))}
      </section>
    </StyledStories>
  );
};

export default Stories;
