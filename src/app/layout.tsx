import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://socialsift.agency"),
  title: "SocialSift | Digital Growth & Performance Marketing Agency",
  description:
    "SocialSift helps businesses generate qualified leads, acquire customers and grow online through performance marketing, lead generation, conversion optimization and digital growth systems.",
  keywords:
    "performance marketing agency, lead generation, digital growth, Meta Ads, Google Ads, conversion optimization, CRM, WhatsApp automation, digital marketing India",
  authors: [{ name: "SocialSift" }],
  creator: "SocialSift",
  publisher: "SocialSift",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://socialsift.agency",
    siteName: "SocialSift",
    title: "SocialSift | Digital Growth & Performance Marketing Agency",
    description:
      "SocialSift helps businesses generate qualified leads, acquire customers and grow online through performance marketing, lead generation, conversion optimization and digital growth systems.",
    images: [
      {
        url: "/images/hero-visual.png",
        width: 1200,
        height: 630,
        alt: "SocialSift — Digital Growth & Performance Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SocialSift | Digital Growth & Performance Marketing Agency",
    description:
      "SocialSift helps businesses generate qualified leads, acquire customers and grow online through performance marketing.",
    images: ["/images/hero-visual.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#070710" />
      </head>
      <body>{children}</body>
    </html>
  );
}
