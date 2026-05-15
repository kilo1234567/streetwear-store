// SEO Meta Tags
export const SEO_DEFAULTS = {
  siteName: 'Streetwear Store',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://streetwear-store.com',
  description: 'Premium streetwear fashion eCommerce platform with exclusive collections and trending styles.',
  ogImage: '/og-image.png',
  twitterHandle: '@streetwearstore',
};

export const generateMetaTags = ({
  title,
  description,
  image,
  url,
}: {
  title: string;
  description: string;
  image?: string;
  url?: string;
}) => {
  return {
    title: `${title} | ${SEO_DEFAULTS.siteName}`,
    description,
    openGraph: {
      title: `${title} | ${SEO_DEFAULTS.siteName}`,
      description,
      url: url || SEO_DEFAULTS.siteUrl,
      type: 'website',
      images: [
        {
          url: image || SEO_DEFAULTS.ogImage,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      handle: SEO_DEFAULTS.twitterHandle,
      site: SEO_DEFAULTS.twitterHandle,
      cardType: 'summary_large_image',
    },
  };
};

export const generateStructuredData = ({
  type,
  data,
}: {
  type: 'Product' | 'Organization' | 'LocalBusiness' | 'FAQPage';
  data: any;
}) => {
  const baseStructure = {
    '@context': 'https://schema.org',
    '@type': type,
  };

  return {
    __html: JSON.stringify({ ...baseStructure, ...data }),
  };
};
