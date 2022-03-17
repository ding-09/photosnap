import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from '../assets/shared/desktop/arrow.svg';

const StyledArrowButton = styled.button`
  background-color: inherit;
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  span {
    margin-right: 3rem;
  }
  svg {
    g {
      stroke: ${(props) => props.color};
    }
  }
`;

export const ArrowButton = ({ innerText, color }) => {
  return (
    <StyledArrowButton color={color}>
      <span>{innerText}</span>
      <ArrowIcon />
    </StyledArrowButton>
  );
};

const StyledRectangleButton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => (props.backgroundColor === '#000' ? '#fff' : '#000')};
`;

export const RectangleButton = ({ innerText, backgroundColor = '#000' }) => {
  return (
    <StyledRectangleButton backgroundColor={backgroundColor}>
      {innerText}
    </StyledRectangleButton>
  );
};
