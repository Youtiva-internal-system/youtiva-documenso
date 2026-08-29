import type { ImgHTMLAttributes } from 'react';

import logoDarkSrc from '@documenso/assets/logo-dark.png';
import logoSrc from '@documenso/assets/logo.png';
import { cn } from '@documenso/ui/lib/utils';

export type LogoProps = ImgHTMLAttributes<HTMLImageElement>;

/**
 * Renders the Youtiva Sign wordmark, swapping to a white-ink variant in dark
 * mode so it stays legible against dark backgrounds.
 *
 * `className` (including any responsive `hidden`/`block` classes callers
 * pass) is applied to the wrapper so it composes safely with the internal
 * `dark:` toggle on each image — mixing both kinds of variants on the same
 * element is fragile with Tailwind's cascade order.
 */
export const BrandingLogo = ({ alt = 'Youtiva Sign', className, ...props }: LogoProps) => {
  return (
    <span className={cn('inline-flex items-center', className)}>
      <img src={logoSrc} alt={alt} className="h-full w-auto object-contain dark:hidden" {...props} />
      <img
        src={logoDarkSrc}
        alt={alt}
        className="hidden h-full w-auto object-contain dark:block"
        {...props}
      />
    </span>
  );
};
