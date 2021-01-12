import styled from 'styled-components';
import React from 'react';

// Default style for arrow buttons 

const ArrowButton = ({ title, color, padding }) => {
  return (
    <Button padding={padding} color={color}>
      <span>{title}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
        <g fill="none" fillRule="evenodd" stroke={color || '#fff'}>
          <path d="M0 7h41.864M35.428 1l6 6-6 6" />
        </g>
      </svg>
    </Button>
  );
};

const Button = styled.button`
  padding-top: 4px;
  padding-bottom: 5px;
  padding-left: 2px;
  background: transparent;
  color: ${props => props.color || '#fff'};
  border: none;
  display: flex;
  align-items: center;
  span {
    padding-right: ${(props) => props.padding || '1.6rem'};
  }
  &:hover {
    span {
      text-decoration: underline;
    }
  }
`;

export default ArrowButton;
