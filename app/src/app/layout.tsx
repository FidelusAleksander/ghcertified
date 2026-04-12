import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

/**
 * JetBrains Mono — monospace font for code snippets.
 * Loaded via next/font/google for optimal performance.
 * Mona Sans (body + headings) is loaded via @font-face in globals.css.
 */

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
      className={`${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
