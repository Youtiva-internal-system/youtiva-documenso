import type { ImgHTMLAttributes } from 'react';

import logoSrc from '@documenso/assets/logo.png';

export type LogoProps = ImgHTMLAttributes<HTMLImageElement>;

export const BrandingLogo = ({ alt = 'Youtiva Sign', ...props }: LogoProps) => {
  return <img src={logoSrc} alt={alt} {...props} />;
};
