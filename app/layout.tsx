import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title:
    "Sumit Walmiki - Full-Stack Software Engineer | React, Node.js, Python, Cloud",
  description:
    "Experienced Full-Stack Software Engineer with 5+ years building scalable web applications. Expertise in JavaScript, Python, React, Node.js, and cloud technologies. Open to opportunities at top tech companies.",
  keywords:
    "Full-Stack Developer, Software Engineer, JavaScript, React, Node.js, System Design, Web Development, Tech Jobs, Google, Meta, FAANG",
  authors: [{ name: "Sumit Walmiki" }],
  metadataBase: new URL('https://sumitwalmiki.vercel.app'),
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Sumit Walmiki - Full-Stack Software Engineer",
    description:
      "Building scalable, high-performance applications with modern technologies.",
    type: "website",
    locale: "en_US",
    url: "https://sumitwalmiki.vercel.app/",
    siteName: "Sumit Walmiki Portfolio",
    images: [
      {
        url: "/avatar.png",
        width: 1200,
        height: 630,
        alt: "Sumit Walmiki - Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumit Walmiki - Full-Stack Software Engineer",
    description:
      "Building scalable, high-performance applications with modern technologies.",
    images: ["/avatar.png"],
    creator: "@sumitwalmiki",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
