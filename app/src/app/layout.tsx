import type { Metadata } from "next";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

/**
 * Mona Sans — GitHub's variable font (weight 200–900, optical size 12–14).
 * Self-hosted via next/font/local for zero external requests and automatic preload.
 */
const monaSans = localFont({
  src: "../../public/fonts/MonaSansVF.woff2",
  variable: "--font-mona-sans",
  display: "swap",
  weight: "200 900",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ghcertified.com"),
  title: {
    default: "GitHub Certified — Practice Tests",
    template: "%s — GitHub Certified",
  },
  description:
    "Master GitHub Certifications with community-created practice tests for Actions, Admin, Advanced Security, Foundations, and Copilot.",
  openGraph: {
    title: "GitHub Certified — Practice Tests",
    description:
      "Master GitHub Certifications with community-created practice tests for Actions, Admin, Advanced Security, Foundations, and Copilot.",
    siteName: "GitHub Certified",
    type: "website",
    images: [{ url: "/opengraph.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GitHub Certified — Practice Tests",
    description:
      "Master GitHub Certifications with community-created practice tests for Actions, Admin, Advanced Security, Foundations, and Copilot.",
    images: ["/opengraph.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${monaSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
