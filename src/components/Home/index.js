import Hero from '../Hero';
import homeContent from './homeContent';
import { StyledHome } from './Home.styled';
import Details from './Details';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <StyledHome>
      <section className='home-content'>
        <Hero
          img={homeContent.heroImg}
          heroHeading={homeContent.heroHeading}
          heroDesc={homeContent.heroDesc}
          hasBorder={true}
          hasLink={true}
          linkText='Get an invite'
        />
        {homeContent.subDetails.map((details) => (
          <Details details={details} key={Math.floor(Math.random() * 1000)} />
        ))}
      </section>
    </StyledHome>
  );
};

export default Home;
