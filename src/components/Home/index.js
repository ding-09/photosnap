import Hero from '../Hero';
import HomeContent from './HomeContent';
import { StyledHome } from './Home.styled';
import Details from './Details';

const index = () => {
  return (
    <StyledHome>
      <section className='home-content'>
        <Hero
          img={HomeContent.heroImg}
          heroHeading={HomeContent.heroHeading}
          heroDesc={HomeContent.heroDesc}
          hasBorder={true}
          hasLink={true}
          linkText='Get an invite'
        />
        {HomeContent.subDetails.map((details) => (
          <Details details={details} key={Math.floor(Math.random() * 1000)} />
        ))}
      </section>
    </StyledHome>
  );
};

export default index;
