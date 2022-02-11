import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from '../assets/shared/desktop/arrow.svg';

const StyledArrowButton = styled.button`
  background-color: inherit;
  display: flex;
  justify-content: space-between;
  min-width: 75%;
  margin: 0 auto;
  svg {
    g {
      stroke: ${props => props.color};
    }
  }
`;

export const ArrowButton = ({ innerText, color }) => {
  return (
    <StyledArrowButton color={color}>
      {innerText}
      <ArrowIcon />
    </StyledArrowButton>
  );
};
