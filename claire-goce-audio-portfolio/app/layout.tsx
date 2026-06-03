import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  publisher: siteConfig.company,
  metadataBase: siteConfig.url ? new URL(siteConfig.url) : undefined,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author,
    jobTitle: "Audio Engineering Portfolio",
    email: `mailto:${siteConfig.email}`,
    address: siteConfig.location,
    url: siteConfig.url,
    sameAs: [siteConfig.linkedin, siteConfig.instagram].filter(Boolean),
    knowsAbout: ["Audio Engineering", "Mixing", "Sound Design", "Dubbing", "Dialogue Editing", "Multimedia Arts"],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
