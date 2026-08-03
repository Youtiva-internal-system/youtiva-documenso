import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: 'https://sign.youtiva.com/docs',
    sitemap: 'https://sign.youtiva.com/docs/sitemap.xml',
  };
}
