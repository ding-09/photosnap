import Hero from '../Hero';
import StoriesContent from './StoriesContent';

const index = () => {
  return (
    <>
      <p className='xsm-heading'>Last Month's Featured Story</p>
      <Hero
        img={StoriesContent.heroImg}
        heroHeading={StoriesContent.heroHeading}
        heroDesc={StoriesContent.heroDesc}
      />
      <div className="sub-info">
          <span className="date">March 2nd 2020</span>
          <span className="author"> by John Appleseed</span>
      </div>
    </>
  );
};

export default index;
