import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { notFound } from 'next/navigation';
import { ImageResponse } from 'next/og';
import { getPageImage, source } from '@/lib/source';

export const revalidate = false;

const loadAssets = async () => {
  const [interRegularData, interSemiBoldData, interBoldData] = await Promise.all([
    readFile(fileURLToPath(new URL('../../../../../public/fonts/inter-regular.ttf', import.meta.url))),
    readFile(fileURLToPath(new URL('../../../../../public/fonts/inter-semibold.ttf', import.meta.url))),
    readFile(fileURLToPath(new URL('../../../../../public/fonts/inter-bold.ttf', import.meta.url))),
  ]);

  return {
    fonts: [
      { name: 'Inter', data: interRegularData, weight: 400 as const, style: 'normal' as const },
      { name: 'Inter', data: interSemiBoldData, weight: 600 as const, style: 'normal' as const },
      { name: 'Inter', data: interBoldData, weight: 700 as const, style: 'normal' as const },
    ],
  };
};

export async function GET(_req: Request, { params }: RouteContext<'/og/docs/[...slug]'>) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));

  if (!page) {
    notFound();
  }

  const { fonts } = await loadAssets();

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        background:
          'radial-gradient(circle at top left, rgba(255,144,118,0.18), transparent 320px), radial-gradient(circle at top right, rgba(162,110,219,0.18), transparent 360px), linear-gradient(180deg, #FAFAF8, #FFFFFF)',
        padding: '60px 80px',
        fontFamily: 'Inter',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '6px',
          background: 'linear-gradient(90deg, #FF9076 0%, #E76A4E 50%, #A26EDB 100%)',
        }}
      />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <div
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, #FF9076 0%, #A26EDB 100%)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '22px',
            fontWeight: 700,
          }}
        >
          Y
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          <span style={{ color: '#14141C', fontSize: '26px', fontWeight: 700, letterSpacing: '-0.03em' }}>
            Youtiva Sign
          </span>
          <span
            style={{
              color: '#7F4ABB',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
            }}
          >
            Docs
          </span>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'center',
          gap: '16px',
        }}
      >
        <h1
          style={{
            color: '#18181B',
            fontSize: page.data.title.length > 40 ? '48px' : '56px',
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            margin: 0,
          }}
        >
          {page.data.title}
        </h1>
        {page.data.description && (
          <p
            style={{
              color: '#5C5C74',
              fontSize: '22px',
              fontWeight: 400,
              lineHeight: 1.4,
              margin: 0,
              maxWidth: '900px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {page.data.description}
          </p>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ color: '#8E8EA4', fontSize: '16px', fontWeight: 500 }}>sign.youtiva.com/docs{page.url}</span>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts,
    },
  );
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    lang: page.locale,
    slug: getPageImage(page).segments,
  }));
}
