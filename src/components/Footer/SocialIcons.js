import styled from 'styled-components';

// social icons
import { ReactComponent as FbIcon } from '../../assets/shared/desktop/facebook.svg';
import { ReactComponent as YtIcon } from '../../assets/shared/desktop/youtube.svg';
import { ReactComponent as TwitterIcon } from '../../assets/shared/desktop/twitter.svg';
import { ReactComponent as PinIcon } from '../../assets/shared/desktop/pinterest.svg';
import { ReactComponent as IgIcon } from '../../assets/shared/desktop/instagram.svg';


export const SocialButton = styled.button`
  svg {
    path {
      fill: #fff;
    }
  }
  &:hover {
    svg {
      path {
        fill: url(#${props => props.color});
      }
    }
  }
`;

export { FbIcon, YtIcon, TwitterIcon, PinIcon, IgIcon };
