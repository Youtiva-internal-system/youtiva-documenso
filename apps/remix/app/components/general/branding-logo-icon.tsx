import type { ImgHTMLAttributes } from 'react';

import logoIconDarkSrc from '@documenso/assets/logo_icon-dark.png';
import logoIconSrc from '@documenso/assets/logo_icon.png';
import { cn } from '@documenso/ui/lib/utils';

export type LogoProps = ImgHTMLAttributes<HTMLImageElement>;

/**
 * Renders the Youtiva icon mark, swapping to a white-ink variant in dark
 * mode so it stays legible against dark backgrounds. Do not use `invert`
 * filters here — they discolor the brand's coral/purple/pink accent dots.
 *
 * `className` is applied to the wrapper (see `BrandingLogo` for why).
 */
export const BrandingLogoIcon = ({ alt = 'Youtiva', className, ...props }: LogoProps) => {
  return (
    <span className={cn('inline-flex items-center', className)}>
      <img src={logoIconSrc} alt={alt} className="h-full w-auto object-contain dark:hidden" {...props} />
      <img
        src={logoIconDarkSrc}
        alt={alt}
        className="hidden h-full w-auto object-contain dark:block"
        {...props}
      />
    </span>
  );
};
