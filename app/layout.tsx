import type { Metadata, Viewport } from "next";
import "@fontsource-variable/playfair-display";
import "@fontsource-variable/inter";
import "./globals.css";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Youth Empowerment & Mentorship`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "youth empowerment",
    "mentorship",
    "life skills",
    "Kenya",
    "school outreach",
    "emotional intelligence",
    "high school to university transition",
  ],
  openGraph: {
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    images: [{ url: "/logo.png", width: 640, height: 640, alt: `${SITE.name} logo` }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    images: ["/logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#a3a3a3",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}