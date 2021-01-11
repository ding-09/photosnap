import React from 'react';
import styled from 'styled-components';
import RectangleButton from '../styles/RectangleButton';
import { Link } from 'react-router-dom';
import logo from '../assets/shared/desktop/logo.svg';

const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <figure>
          <img src={logo} alt="Photosnap logo" />
        </figure>
        <Nav>
          <ul>
            <li>
              <Link to="/stories">STORIES</Link>
            </li>
            <li>
              <Link to="/features">FEATURES</Link>
            </li>
            <li>
              <Link to="/pricing">PRICING</Link>
            </li>
          </ul>
        </Nav>
        <RectangleButton black>GET AN INVITE</RectangleButton>
      </HeaderContainer>
    </header>
  );
};

const HeaderContainer = styled.div`
  width: 90%;
  min-height: 7.2rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Nav = styled.nav`
  li {
    display: inline-block;
    &:nth-child(2) {
      padding: 0 3.7rem;
    }
  }
`;

export default Header;
