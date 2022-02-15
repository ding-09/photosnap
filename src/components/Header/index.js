import { useState } from 'react';
import { StyledHeader } from './Header.styled';
import MainLogo from '../../assets/shared/desktop/logo.svg';
import Nav from '../Nav';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [animateOpenMenu, setAnimateOpenMenu] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleAnimation = (num) => {
    if (showMenu && animateOpenMenu) {
      return `open-animation-${num}`;
    }
    if (menuClicked && !showMenu && !animateOpenMenu) {
      return `close-animation-${num}`;
    }
  };
  return (
    <StyledHeader>
      <div className='mobile-header-container'>
        <img src={MainLogo} alt='Photosnap logo' />
        <div
          className='hamburger-menu'
          onClick={(e) => {
            setMenuClicked(true);
            setShowMenu(!showMenu);
            setAnimateOpenMenu(!animateOpenMenu);
          }}
        >
          <span className={toggleAnimation(1)}></span>
          <span className={toggleAnimation(2)}></span>
        </div>
        {showMenu && (
          <div className='nav-modal'>
            <Nav />
          </div>
        )}
      </div>
      <div className='header-container'></div>
    </StyledHeader>
  );
};

export default Header;
