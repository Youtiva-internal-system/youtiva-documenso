import type { SVGAttributes } from 'react';
import { useId } from 'react';

export type LogoProps = SVGAttributes<SVGSVGElement>;

export const BrandingLogo = ({ ...props }: LogoProps) => {
  const gradientId = useId();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 48" fill="none" {...props}>
      <defs>
        <linearGradient id={gradientId} x1="4" x2="44" y1="6" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF9076" />
          <stop offset="1" stopColor="#A26EDB" />
        </linearGradient>
      </defs>

      <rect x="4" y="4" width="40" height="40" rx="13" fill={`url(#${gradientId})`} />
      <path
        fill="#fff"
        d="M15.4 14h5.3l4.8 7 4.8-7H36l-7.8 10.9V34h-5.4v-9.1L15.4 14Z"
      />

      <text
        x="56"
        y="22"
        fill="currentColor"
        fontFamily="Poppins, Inter, sans-serif"
        fontSize="19"
        fontWeight="700"
        letterSpacing="-0.03em"
      >
        Youtiva
      </text>
      <text
        x="56"
        y="36"
        fill="#7F4ABB"
        fontFamily="Poppins, Inter, sans-serif"
        fontSize="11"
        fontWeight="600"
        letterSpacing="0.18em"
      >
        SIGN
      </text>
    </svg>
  );
};
