import styled from 'styled-components';

// Default style for rectangle buttons

const RectangleButton = styled.button`
  min-width: 16rem;
  height: 4rem;
  padding: 1.2rem 2.4rem;
  background: ${(props) => (props.black ? '#000000' : '#ffffff')};
  color: ${(props) => (props.black ? '#ffffff' : '#000000')};
  border: none;
  transition: 0.25s;
  &:hover {
    background: #dfdfdf;
    color: ${(props) => props.black && `#000000`};
  }
`;

export default RectangleButton;
