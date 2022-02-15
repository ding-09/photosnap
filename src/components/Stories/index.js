import Hero from '../Hero';
import StoriesContent from './StoriesContent';
import { StyledStories } from './Stories.styled';

const index = () => {
  return (
    <StyledStories>
      <Hero
        img={StoriesContent.heroImg}
        heroHeading={StoriesContent.heroHeading}
        heroDesc={StoriesContent.heroDesc}
        hasLink={true}
        linkText='Read the story'
        stories={true}
      />
    </StyledStories>
  );
};

export default index;
