import heroImg from '../../assets/features/desktop/hero.jpg';
import featuresResponsive from '../../assets/features/desktop/responsive.svg';
import featuresLimit from '../../assets/features/desktop/no-limit.svg';
import featuresEmbed from '../../assets/features/desktop/embed.svg';
import featuresDomain from '../../assets/features/desktop/custom-domain.svg';
import featuresExposure from '../../assets/features/desktop/boost-exposure.svg';
import featuresDragDrop from '../../assets/features/desktop/drag-drop.svg';

const featuresContent = {
  heroImg,
  heroHeading: 'Features',
  heroDesc:
    'Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.',
  features: [
    {
      img: featuresResponsive,
      heading: '100% Responsive',
      desc:
        'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.',
    },
    {
      img: featuresLimit,
      heading: 'No Photo Upload Limit',
      desc:
        'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
    },
    {
      img: featuresEmbed,
      heading: 'Available to Embed',
      desc:
        'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ',
    },
    {
      img: featuresDomain,
      heading: 'Custom Domain',
      desc:
        'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!',
    },
    {
      img: featuresExposure,
      heading: 'Boost Your Exposure',
      desc:
        'Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.',
    },
    {
      img: featuresDragDrop,
      heading: 'Drag & Drop Image',
      desc:
        'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.',
    },
  ],
};

export default featuresContent;
