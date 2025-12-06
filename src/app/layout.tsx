import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salman Shafi - System Administrator & DNS Expert",
  description: "Professional portfolio of Salman Shafi, System Administrator and DNS Expert from Bogura, Bangladesh. Specialized in Nginx, Apache, RHEL, Technitium DNS, and NS1.",
  keywords: "System Administrator, DNS Expert, Nginx, Apache, RHEL, Technitium DNS, NS1, Bangladesh, Server Management, Infrastructure, Web Server, DNS Configuration, System Administration",
  authors: [{ name: "Salman Shafi" }],
  creator: "Salman Shafi",
  publisher: "Salman Shafi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://salmanshafi.net'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://salmanshafi.net',
    title: 'Salman Shafi - System Administrator & DNS Expert',
    description: 'Professional portfolio of Salman Shafi, System Administrator and DNS Expert from Bogura, Bangladesh. Specialized in Nginx, Apache, RHEL, Technitium DNS, and NS1.',
    siteName: 'Salman Shafi Portfolio',
    images: [
      {
        url: '/share.webp',
        width: 1200,
        height: 630,
        alt: 'Salman Shafi - System Administrator & DNS Expert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@salmanshafi',
    creator: '@salmanshafi',
    title: 'Salman Shafi - System Administrator & DNS Expert',
    description: 'Professional portfolio of Salman Shafi, System Administrator and DNS Expert from Bogura, Bangladesh. Specialized in Nginx, Apache, RHEL, Technitium DNS, and NS1.',
    images: ['/share.webp'],
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Salman Shafi" />
        <link rel="apple-touch-icon" href="/photo.webp" />
        <link rel="icon" type="image/webp" href="/photo.webp" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
