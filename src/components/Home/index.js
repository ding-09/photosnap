import Hero from '../Hero';
import HomeContent from './HomeContent';

const index = () => {
  return (
    <>
      <Hero
        img={HomeContent.heroImg}
        heroHeading={HomeContent.heroHeading}
        heroDesc={HomeContent.heroDesc}
        hasBorder={true}
        hasLink={true}
        linkText='Get an invite'
      />
    </>
  );
};

export default index;
