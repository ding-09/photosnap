// HERO IMGS 
import heroMobileImg from '../../assets/home/tablet/test.jpg';
import heroTabletImg from '../../assets/home/tablet/test.jpg';
import heroDesktopImg from '../../assets/home/tablet/test.jpg';

// SUB DETAILS IMGS
import storiesMobileImg from '../../assets/home/mobile/beautiful-stories.jpg'
import storiesTabletImg from '../../assets/home/tablet/beautiful-stories.jpg'
import storiesDesktopImg from '../../assets/home/desktop/beautiful-stories.jpg'

import designedMobileImg from '../../assets/home/mobile/designed-for-everyone.jpg';
import designedTabletImg from '../../assets/home/tablet/designed-for-everyone.jpg';
import designedDesktopImg from '../../assets/home/desktop/designed-for-everyone.jpg';

const homeContent = {
  heroImgs: {
    mobile: heroMobileImg,
    tablet: heroTabletImg,
    desktop: heroDesktopImg,
  },
  heroHeading: 'Create and share your photo stories.',
  heroDesc:
    'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
  subDetails: [
    {
      imgs: {
        mobile: storiesMobileImg,
        tablet: storiesTabletImg,
        desktop: storiesDesktopImg,
      },
      heading: 'Beautiful stories every time',
      desc:
        'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
    },
    {
      imgs: {
        mobile: designedMobileImg,
        tablet: designedTabletImg,
        desktop: designedDesktopImg,
      },
      heading: 'Designed for everyone',
      desc:
        'Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ',
    },
  ],
};

export default homeContent;
