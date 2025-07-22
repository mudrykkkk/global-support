import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://global-support.live'),
  title: 'Global Support - Зовнішній інтелектуальний менеджмент',
  description: 'Global Support спеціалізується у напрямку зовнішнього інтелектуального менеджменту. Ми інтегруємо рішення у сферах фінансової архітектури, освітньої динаміки та управлінської трансформації.',
  keywords: 'консалтинг, фінанси, освіта, управління, бізнес, стратегія',
  authors: [{ name: 'Global Support' }],
  openGraph: {
    title: 'Global Support - Зовнішній інтелектуальний менеджмент',
    description: 'Професійний консалтинг у сферах фінансової архітектури, освітньої динаміки та управлінської трансформації',
    url: 'https://global-support.live',
    siteName: 'Global Support',
    locale: 'uk_UA',
    type: 'website',
    images: [
      {
        url: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
        width: 1200,
        height: 630,
        alt: 'Global Support - Business Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Support - Зовнішній інтелектуальний менеджмент',
    description: 'Професійний консалтинг у сферах фінансової архітектури, освітньої динаміки та управлінської трансформації',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ua">
      <body className={inter.className}>{children}</body>
    </html>
  );
}