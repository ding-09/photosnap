import { StyledError } from './index.styled'
import ScrollToTop from '../ScrollToTop'

const Error = () => {
  ScrollToTop();
  
  return (
    <StyledError>
      <h1>The page you are looking for does not exist!</h1>
    </StyledError>
  );
};

export default Error;
