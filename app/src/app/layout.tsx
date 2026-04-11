import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

/**
 * Bricolage Grotesque — display/heading font.
 * Confident, slightly quirky geometric. Good for a study tool that
 * takes itself seriously but isn't corporate.
 */
const bricolage = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Figtree — body font.
 * Warm humanist sans, great readability for long study sessions.
 * Not overused like Inter/DM Sans.
 */
const figtree = Figtree({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GitHub Certified — Practice Tests",
  description:
    "Master GitHub Certifications with community-created practice tests for Actions, Admin, Advanced Security, Foundations, and Copilot.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
