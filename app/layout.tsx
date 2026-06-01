import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ammon Mediterranean Market | Cherry Hill, NJ — Authentic Mediterranean Grocery",
  description:
    "Your hidden gem in Cherry Hill, NJ. Authentic Mediterranean & Middle Eastern groceries, fresh falafel, shawarma, hummus, halal meat, and specialty items. Family-owned since day one. In-store shopping, curbside pickup & delivery available.",
  keywords: [
    "Mediterranean market",
    "Middle Eastern grocery",
    "Cherry Hill NJ",
    "halal meat",
    "falafel",
    "shawarma",
    "hummus",
    "authentic Mediterranean food",
    "specialty grocery",
  ],
  openGraph: {
    title: "Ammon Mediterranean Market | Cherry Hill, NJ",
    description:
      "Authentic Mediterranean & Middle Eastern groceries, fresh falafel, shawarma & halal meats. A hidden gem in Cherry Hill, NJ.",
    type: "website",
    locale: "en_US",
    siteName: "Ammon Mediterranean Market",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ammon Mediterranean Market",
    description:
      "Authentic Mediterranean & Middle Eastern groceries in Cherry Hill, NJ.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal">
        {children}
      </body>
    </html>
  );
}
