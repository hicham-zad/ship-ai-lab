import type { Metadata } from 'next';
import { JetBrains_Mono, Onest } from 'next/font/google';
import '../globals.css';
import './ksef.css';
import StructuredData from '@/components/StructuredData';
import { generateOrganizationSchema } from '@/lib/seo';
import { KSEF_BASE, KSEF_NAME, KSEF_PUBLISHER } from '@/data/ksef/config';

const body = Onest({ subsets: ['latin', 'latin-ext'], variable: '--font-body', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin', 'latin-ext'], variable: '--font-mono', display: 'swap', weight: ['400', '500'] });

// Root layout for ksef.shipailab.com (proxy.ts rewrites the subdomain to /ksef/*). Separate from
// app/[locale]/layout.tsx so the Polish pages declare lang="pl": with lang="en", Chrome offers to
// translate them, and its translated DOM crashes React (insertBefore/removeChild NotFoundError).
export const metadata: Metadata = {
  metadataBase: new URL(KSEF_BASE),
  applicationName: KSEF_NAME,
  creator: KSEF_PUBLISHER,
  publisher: KSEF_PUBLISHER,
  icons: {
    icon: [
      { url: '/ksef/ksef-faktury-ikona-64.webp', type: 'image/webp', sizes: '64x64' },
      { url: '/ksef/ksef-faktury-ikona-192.webp', type: 'image/webp', sizes: '192x192' },
    ],
    apple: { url: '/ksef/ksef-faktury-ikona-180.png', sizes: '180x180' },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export default function KsefRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <StructuredData data={generateOrganizationSchema()} />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KN7Z7K58');`,
          }}
        />
      </head>
      <body className={`${body.variable} ${mono.variable} fk-site`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KN7Z7K58"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
