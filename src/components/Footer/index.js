import { StyledFooter } from './Footer.styled';
import { ReactComponent as MainLogo } from '../../assets/shared/desktop/logo.svg';
import { FbIcon, YtIcon, TwitterIcon, PinIcon, IgIcon } from './SocialIcons';
import Nav from '../Nav';

const index = () => {
  return (
    <StyledFooter>
      <section className='logo'>
        <MainLogo />
      </section>
      <section className='socials'>
        <ul>
          <li>
            <button>
              <FbIcon />
            </button>
          </li>
          <li>
            <button>
              <YtIcon />
            </button>
          </li>
          <li>
            <button>
              <TwitterIcon />
            </button>
          </li>
          <li>
            <button>
              <PinIcon />
            </button>
          </li>
          <li>
            <button>
              <IgIcon />
            </button>
          </li>
        </ul>
      </section>
      <Nav />
      <section className="misc-info">

      </section>
    </StyledFooter>
  );
};

export default index;
