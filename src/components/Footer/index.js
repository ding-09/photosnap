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
import Nav from '../Nav';
import { ArrowButton } from '../../styles/Buttons';

const index = () => {
  return (
    <StyledFooter>
      <div className='footer-container'>
        <section className='logo'>
          <MainLogo />
        </section>
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
