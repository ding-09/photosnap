import { StyledBeta } from './Beta.styled';
import { ArrowButton } from '../styles/Buttons';
import betaBg from '../assets/shared/mobile/bg-beta.jpg'

const Beta = () => {
  return (
    <StyledBeta bgImg={betaBg}>
      <h2>We're in beta. Get your invite today!</h2>
      <ArrowButton innerText='Get an invite' color='#fff' />
      <div className="hero-border"></div>
    </StyledBeta>
  );
};

export default Beta;
