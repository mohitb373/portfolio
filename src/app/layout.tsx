import type { Metadata, Viewport } from "next";
import { profile } from "@/data/profile";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

const pageTitle = `${profile.name} — ${profile.title}`;
const pageDesc = `${profile.name}, ${profile.title}. Portfolio, projects, experience and skills.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDesc,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name }],
  keywords: [
    profile.name,
    profile.title,
    "portfolio",
    "developer",
    "projects",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: pageTitle,
    description: pageDesc,
    siteName: `${profile.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDesc,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
