import { RootProvider } from 'fumadocs-ui/provider/next';
import type { Metadata } from 'next';
import { JetBrains_Mono, Poppins } from 'next/font/google';
import PlausibleProvider from 'next-plausible';

import './global.css';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sign.youtiva.com/docs'),
  title: {
    template: '%s | Youtiva Sign Docs',
    default: 'Youtiva Sign Docs',
  },
  description: 'Documentation for Youtiva Sign, covering document workflows, API integrations, and self-hosting.',
  openGraph: {
    siteName: 'Youtiva Sign Docs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@documenso',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${poppins.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <PlausibleProvider domain="sign.youtiva.com">
          <RootProvider>{children}</RootProvider>
        </PlausibleProvider>
      </body>
    </html>
  );
}
