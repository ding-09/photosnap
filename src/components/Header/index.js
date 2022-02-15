import { useState } from 'react';
import { StyledHeader } from './Header.styled';
import MainLogo from '../../assets/shared/desktop/logo.svg';
import Nav from '../Nav';
import { ReactComponent as HamburgerIcon } from '../../assets/shared/mobile/menu.svg';
import { ReactComponent as ExitIcon } from '../../assets/shared/mobile/close.svg';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <StyledHeader>
      <div className='mobile-header-container'>
        <img src={MainLogo} alt='Photosnap logo' />
        <HamburgerIcon
          onClick={(e) => {
            setShowMenu(!showMenu);
          }}
        />
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
