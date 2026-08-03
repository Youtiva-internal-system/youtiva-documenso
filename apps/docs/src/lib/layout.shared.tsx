import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-3 font-semibold text-[15px] text-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="size-9 shrink-0">
            <defs>
              <linearGradient id="youtiva-docs-mark" x1="4" x2="44" y1="6" y2="42" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF9076" />
                <stop offset="1" stopColor="#A26EDB" />
              </linearGradient>
            </defs>
            <rect x="4" y="4" width="40" height="40" rx="13" fill="url(#youtiva-docs-mark)" />
            <path d="M15.4 14h5.3l4.8 7 4.8-7H36l-7.8 10.9V34h-5.4v-9.1L15.4 14Z" fill="#fff" />
          </svg>
          <span className="flex flex-col leading-none">
            <span className="font-bold tracking-[-0.03em]">Youtiva Sign</span>
            <span className="font-medium text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Docs</span>
          </span>
        </span>
      ),
    },
    githubUrl: 'https://github.com/documenso/documenso',
  };
}
