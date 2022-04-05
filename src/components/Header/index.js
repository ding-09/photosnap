import { useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader } from './index.styled';
import MainLogo from '../../assets/shared/desktop/logo.svg';
import Nav from '../nav';

const Header = () => {

  // MENU STATE
  const [showMenu, setShowMenu] = useState(false);
  const [animateOpenMenu, setAnimateOpenMenu] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);

  // ANIMATION TOGGLE FUNC
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
      {/* MOBILE HEADER */}
      <div className='mobile-header header-container'>
        <Link to='/'>
          <img src={MainLogo} alt='Photosnap logo' />
        </Link>
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
          <div
            className='nav-modal'
            onClick={(e) => {
              let tagName = e.target.tagName;
              if (
                tagName === 'A' ||
                tagName === 'BUTTON' ||
                tagName === 'DIV'
              ) {
                setShowMenu(!showMenu);
                setAnimateOpenMenu(!animateOpenMenu);
              }
            }}
          >
            <Nav />
          </div>
        )}
      </div>

      {/* LARGE HEADER */}
      <div className='header header-container'>
        <Link to='/'>
          <img src={MainLogo} alt='Photosnap logo' />
        </Link>
        <Nav />
      </div>
    </StyledHeader>
  );
};

export default Header;
