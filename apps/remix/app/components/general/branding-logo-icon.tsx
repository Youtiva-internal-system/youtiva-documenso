import type { ImgHTMLAttributes } from 'react';

import logoIconSrc from '@documenso/assets/logo_icon.png';

export type LogoProps = ImgHTMLAttributes<HTMLImageElement>;

export const BrandingLogoIcon = ({ alt = 'Youtiva', ...props }: LogoProps) => {
  return <img src={logoIconSrc} alt={alt} {...props} />;
};
