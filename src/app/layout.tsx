import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import '../styles/accessibility.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Elias - Frontend Developer Portfolio',
  description: 'Experienced Frontend Developer specializing in React, Next.js, and modern web technologies. View my portfolio of innovative web applications and get in touch for your next project.',
  keywords: 'frontend developer, react developer, nextjs, web development, portfolio, javascript, typescript',
  authors: [{ name: 'Elias' }],
  creator: 'Elias',
  openGraph: {
    title: 'Elias - Frontend Developer Portfolio',
    description: 'Experienced Frontend Developer specializing in React, Next.js, and modern web technologies.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elias - Frontend Developer Portfolio',
    description: 'Experienced Frontend Developer specializing in React, Next.js, and modern web technologies.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}>
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Skip to main content
    </a>
    <main id="main-content">
      {children}
    </main>
    </body>
    </html>
  );
}
