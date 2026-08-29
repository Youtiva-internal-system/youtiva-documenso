import { Img, Link } from '../components';
import { useBranding } from '../providers/branding';
import { getSafeBrandingUrl } from '../utils/branding-url';

export type TemplateBrandingLogoProps = {
  assetBaseUrl: string;
  className?: string;
};

const DEFAULT_LOGO_PATH = '/static/logo.png';

/**
 * Renders the email logo.
 *
 * - When custom branding is enabled with a logo, the branding logo is shown.
 *   If a safe (http/https) Brand Website is configured, the logo links to it.
 * - Otherwise the Youtiva Sign logo is shown.
 */
export const TemplateBrandingLogo = ({ assetBaseUrl, className = 'mb-4 h-6' }: TemplateBrandingLogoProps) => {
  const branding = useBranding();

  const hasCustomBrandingLogo = branding.brandingEnabled && Boolean(branding.brandingLogo);

  if (!hasCustomBrandingLogo) {
    const defaultLogoUrl = `${assetBaseUrl}${DEFAULT_LOGO_PATH}`;

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
