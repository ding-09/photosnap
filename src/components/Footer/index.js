import { StyledFooter } from './index.styled';
import { ReactComponent as MainLogo } from '../../assets/shared/desktop/logo.svg';
import {
  FbIcon,
  YtIcon,
  TwitterIcon,
  PinIcon,
  IgIcon,
  SocialButton,
} from './SocialIcons';
import { ArrowButton } from '../../styles/Buttons';
import Nav from '../nav';

const index = () => {
  return (
    <StyledFooter>
      <div className='footer-container'>
        {/* LOGO IMAGE */}
        <section className='logo'>
          <MainLogo />
        </section>

        {/* SOCIAL ICON + LINKS */}
        <section className='socials'>
          <ul>
            <li>
              <SocialButton color='fb'>
                <FbIcon />
              </SocialButton>
            </li>
            <li>
              <SocialButton color='yt'>
                <YtIcon />
              </SocialButton>
            </li>
            <li>
              <SocialButton color='twt'>
                <TwitterIcon />
              </SocialButton>
            </li>
            <li>
              <SocialButton color='pt'>
                <PinIcon />
              </SocialButton>
            </li>
            <li>
              <SocialButton color='ig'>
                <IgIcon />
              </SocialButton>
            </li>
          </ul>
        </section>
        <Nav />
        <section className='misc-info'>
          <ArrowButton innerText='Get an invite' color='white' />
          <p className='copyright'>Copyright 2022. All Rights Reserved</p>
        </section>
      </div>
    </StyledFooter>
  );
};

export default index;
