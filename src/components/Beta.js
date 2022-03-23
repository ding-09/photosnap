import { StyledBeta } from './Beta.styled';
import { ArrowButton } from '../styles/Buttons';

const Beta = () => {
  return (
    <StyledBeta>
      <h2>We're in beta. Get your invite today!</h2>
      <ArrowButton innerText='Get an invite' color='#fff' />
      <div className="hero-border"></div>
    </StyledBeta>
  );
};

export default Beta;
