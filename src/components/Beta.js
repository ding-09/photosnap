import { StyledBeta } from './Beta.styled';
import { ArrowButton } from '../styles/Buttons';
import MainBorder from './border'

const Beta = () => {
  return (
    <StyledBeta>
      <MainBorder />
      <h2>We're in beta. Get your invite today!</h2>
      <ArrowButton innerText='Get an invite' color='#fff' />
    </StyledBeta>
  );
};

export default Beta;
