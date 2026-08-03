import { Img, Link } from '../components';
import { useBranding } from '../providers/branding';
import { getSafeBrandingUrl } from '../utils/branding-url';

export type TemplateBrandingLogoProps = {
  assetBaseUrl: string;
  className?: string;
};

const DEFAULT_LOGO_SVG = encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="212" height="40" viewBox="0 0 212 40" fill="none">
    <defs>
      <linearGradient id="g" x1="2" x2="38" y1="2" y2="38" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FF9076"/>
        <stop offset="1" stop-color="#A26EDB"/>
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="36" height="36" rx="12" fill="url(#g)"/>
    <path d="M11 10h5l4.5 6.6L25 10h5.4l-7 9.8V28h-5V19.8L11 10Z" fill="white"/>
    <text x="48" y="18" fill="#14141C" font-family="Inter,Arial,sans-serif" font-size="17" font-weight="700">Youtiva</text>
    <text x="48" y="31" fill="#7F4ABB" font-family="Inter,Arial,sans-serif" font-size="10" font-weight="700" letter-spacing="2.2">SIGN</text>
  </svg>
`);

/**
 * Renders the email logo.
 *
 * - When custom branding is enabled with a logo, the branding logo is shown.
 *   If a safe (http/https) Brand Website is configured, the logo links to it.
 * - Otherwise the Youtiva Sign logo is shown.
 */
export const TemplateBrandingLogo = ({ assetBaseUrl: _assetBaseUrl, className = 'mb-4 h-6' }: TemplateBrandingLogoProps) => {
  const branding = useBranding();

  const hasCustomBrandingLogo = branding.brandingEnabled && Boolean(branding.brandingLogo);

  if (!hasCustomBrandingLogo) {
    const defaultLogoUrl = `data:image/svg+xml;charset=utf-8,${DEFAULT_LOGO_SVG}`;

    return <Img src={defaultLogoUrl} alt="Youtiva Sign Logo" className={className} />;
  }

  const brandingLogo = <Img src={branding.brandingLogo} alt="Branding Logo" className={className} />;

  const safeBrandingUrl = getSafeBrandingUrl(branding.brandingUrl);

  if (!safeBrandingUrl) {
    return brandingLogo;
  }

  return (
    <Link href={safeBrandingUrl} target="_blank">
      {brandingLogo}
    </Link>
  );
};

export default TemplateBrandingLogo;
