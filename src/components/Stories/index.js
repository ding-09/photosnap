import Hero from '../Hero';
import StoriesContent from './StoriesContent';

const index = () => {
  return (
    <>
      <Hero
        img={StoriesContent.heroImg}
        heroHeading={StoriesContent.heroHeading}
        heroDesc={StoriesContent.heroDesc}
        hasLink={true}
        linkText='Read the story'
      />
    </>
  );
};

export default index;
