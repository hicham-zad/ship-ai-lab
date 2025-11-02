import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shipailab.com/"),
  title: "ShipAI Lab | AI SaaS & Product Development in 15 Days",
  description:
    "ShipAI Lab builds and launches your AI-powered SaaS, web, and mobile products in just 15 days. Fixed pricing, expert team, and proven results. Start your project today!",
  keywords: [
    "AI SaaS",
    "AI product development",
    "AI startup",
    "SaaS development",
    "AI agency",
    "AI web app",
    "AI mobile app",
    "AI MVP",
    "AI automation",
    "ShipAI Lab",
    "AI solutions",
    "AI consulting",
  ],
  openGraph: {
    title: "ShipAI Lab | AI SaaS & Product Development in 15 Days",
    description:
      "ShipAI Lab builds and launches your AI-powered SaaS, web, and mobile products in just 15 days. Fixed pricing, expert team, and proven results. Start your project today!",
    url: "https://shipailab.com/",
    siteName: "ShipAI Lab",
    images: [
      {
        url: "/shipailab.gif",
        width: 800,
        height: 600,
        alt: "ShipAI Lab Demo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShipAI Lab | AI SaaS & Product Development in 15 Days",
    description:
      "ShipAI Lab builds and launches your AI-powered SaaS, web, and mobile products in just 15 days. Fixed pricing, expert team, and proven results. Start your project today!",
    images: ["/shipailab.gif"],
  },
  // authors: [{ name: "ShipAI Lab Team", url: "https://shipailab.com/" }],
  creator: "ShipAI Lab Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
