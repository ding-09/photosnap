import { useState } from 'react';
import styled from 'styled-components';
import RectangleButton from '../styles/RectangleButton';
import { Link, NavLink } from 'react-router-dom';

// logo and icons
import logo from '../assets/shared/desktop/logo.svg';
import menuIcon from '../assets/shared/mobile/menu.svg';
import exitIcon from '../assets/shared/mobile/close.svg';
import MobileMenu from './MobileMenu';

const Header = ({ onFeatures }) => {
  // dynamically change Header button title depending on prop value
  let title = onFeatures ? 'SIGN UP' : 'GET AN INVITE';

  // state for toggling mobile menu
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <header>
      <HeaderContainer>
        <figure>
          <Link to="/">
            <img src={logo} alt="Photosnap logo" />
          </Link>
        </figure>
        <Nav>
          <ul>
            <li>
              <NavLink to="/stories" activeClassName="selected">
                STORIES
              </NavLink>
            </li>
            <li>
              <NavLink to="/features" activeClassName="selected">
                FEATURES
              </NavLink>
            </li>
            <li>
              <NavLink to="/pricing" activeClassName="selected">
                PRICING
              </NavLink>
            </li>
          </ul>
        </Nav>
        <RectangleButton black>{title}</RectangleButton>
      </HeaderContainer>
      <MobileHeaderContainer>
        <figure>
          <Link to="/">
            <img src={logo} alt="Photosnap logo" />
          </Link>
        </figure>
        <button className="icon" onClick={() => setDisplayMenu(!displayMenu)}>
          <img src={displayMenu ? exitIcon : menuIcon} alt="menu icon" />
        </button>
        {displayMenu && <MobileMenu setDisplayMenu={setDisplayMenu} />}
      </MobileHeaderContainer>
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
  figure {
    a {
      &:hover {
        opacity: 1;
      }
    }
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

const MobileHeaderContainer = styled(HeaderContainer)`
  justify-content: space-between;
  padding: 0 2.5rem;
  display: none;
  .icon {
    background: transparent;
    border: none;
  }
  @media (max-width: 700px) {
    display: flex;
    figure {
      padding-top: 5px;
    }
  }
  @media (max-width: 375px) {
    padding: 0 1.8rem;
  }
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
