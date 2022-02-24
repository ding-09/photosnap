import heroImg from '../../assets/pricing/desktop/hero.jpg';

const PricingContent = {
  heroImg,
  heroHeading: 'Pricing',
  heroDesc:
    'Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.',
  pricing: {
    basic: {
      tier: 'Basic',
      desc:
        'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
      monthlyPrice: 19,
      annualPrice: 190,
    },
    pro: {
      tier: 'Pro',
      desc:
        'More advanced features available. Recommended for photography veterans and professionals.',
      monthlyPrice: 39,
      annualPrice: 390,
    },
    business: {
      tier: 'Business',
      desc:
        'Additional features available such as more detailed metrics. Recommended for business owners.',
      monthlyPrice: 99,
      annualPrice: 990,
    },
  },
};

export default PricingContent;
