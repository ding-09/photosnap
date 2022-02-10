import { useState } from 'react';
import { StyledHeader } from './Header.styled';
import MainLogo from '../../assets/shared/desktop/logo.svg';
import { ReactComponent as HamburgerIcon } from '../../assets/shared/mobile/menu.svg';
import { ReactComponent as ExitIcon } from '../../assets/shared/mobile/close.svg';

const Header = () => {
  return (
    <StyledHeader>
      <div className='mobile-header-container'>
        <img src={MainLogo} alt='Photosnap logo' />
        <HamburgerIcon />
      </div>
      <div className='header-container'></div>
    </StyledHeader>
  );
};

export default Header;
