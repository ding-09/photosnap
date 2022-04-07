import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from '../assets/shared/desktop/arrow.svg';

const StyledArrowButton = styled.a`
  background-color: inherit;
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.storyCard ? 'space-between' : ''};
  svg {
    g {
      stroke: ${(props) => props.color};
    }
  }
`;

const StyledRectangleButton = styled.a`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => (props.backgroundColor === '#000' ? '#fff' : '#000')};
  padding: 1.4rem 0;
  display: flex;
  justify-content: center;

  /* MEDIA QUERIES */
  @media (min-width: 768px) {
    padding: 1.2rem 2.4rem;
  }
`;

export const ArrowButton = ({ innerText, color = '#fff', storyCard }) => {
  return (
    <StyledArrowButton color={color} storyCard={storyCard}>
      <span>{innerText}</span>
      <ArrowIcon />
    </StyledArrowButton>
  );
};

export const RectangleButton = ({ innerText, backgroundColor = '#000' }) => {
  return (
    <StyledRectangleButton backgroundColor={backgroundColor}>
      {innerText}
    </StyledRectangleButton>
  );
};
