import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Mono, DM_Sans } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const cormorant = Cormorant_Garamond({ variable: "--font-cormorant", subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });
const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"], display: "swap" });
const dmMono = DM_Mono({ variable: "--font-dm-mono", subsets: ["latin"], weight: ["400", "500"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Portfolio | Personal Profile",
    template: "%s | Portfolio",
  },
  description: "Personal portfolio showcasing projects, organizational experience, achievements, and professional journey.",
  applicationName: "Personal Portfolio",
  openGraph: {
    title: "Personal Portfolio",
    description: "A collection of personal projects, experiences, and milestones.",
    type: "website",
    locale: "id_ID",
    siteName: "Personal Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFAF8",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
