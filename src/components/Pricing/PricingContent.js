import heroImg from '../../assets/pricing/desktop/hero.jpg';

const PricingContent = {
  heroImg,
  heroHeading: 'Pricing',
  heroDesc:
    'Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.',
  pricing: [
    {
      tier: 'Basic',
      desc:
        'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
      monthlyPrice: 19,
      annualPrice: 190,
    },
    {
      tier: 'Pro',
      desc:
        'More advanced features available. Recommended for photography veterans and professionals.',
      monthlyPrice: 39,
      annualPrice: 390,
    },
    {
      tier: 'Business',
      desc:
        'Additional features available such as more detailed metrics. Recommended for business owners.',
      monthlyPrice: 99,
      annualPrice: 990,
    },
  ],
  features: [
    {
      heading: 'Unlimited story posting',
      tiers: {
        basic: true,
        pro: true,
        business: true,
      },
    },
    {
      heading: 'Unlimited photo upload',
      tiers: {
        basic: true,
        pro: true,
        business: true,
      },
    },
    {
      heading: 'Unlimited story posting',
      tiers: {
        basic: true,
        pro: true,
        business: true,
      },
    },
    {
      heading: 'Embedding custom content',
      tiers: {
        basic: false,
        pro: true,
        business: true,
      },
    },
    {
      heading: 'Customize metadata',
      tiers: {
        basic: false,
        pro: true,
        business: true,
      },
    },
    {
      heading: 'Advanced metrics',
      tiers: {
        basic: false,
        pro: false,
        business: true,
      },
    },
    {
      heading: 'Photo downloads',
      tiers: {
        basic: false,
        pro: false,
        business: true,
      },
    },
    {
      heading: 'Search engine indexing',
      tiers: {
        basic: false,
        pro: false,
        business: true,
      },
    },
    {
      heading: 'Custom analytics',
      tiers: {
        basic: false,
        pro: false,
        business: true,
      },
    },
  ],
};

export default PricingContent;
