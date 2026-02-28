import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://kondorplus.net'),
  title: {
    default: "Kondor Plus Consulting | Data Engineering & AI Solutions",
    template: "%s | Kondor Plus Consulting",
  },
  description: "Machine Learning, RAG Apps, and Data Engineering Solutions by Nestor Rojas. 14707761 CANADA INC.",
  openGraph: {
    title: "Kondor Plus Consulting | Data Engineering & AI Solutions",
    description: "Machine Learning, RAG Apps, and Data Engineering Solutions by Nestor Rojas. 14707761 CANADA INC.",
    url: 'https://kondorplus.net',
    siteName: 'Kondor Plus Consulting',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kondor Plus Consulting | Data Engineering & AI Solutions",
    description: "Machine Learning, RAG Apps, and Data Engineering Solutions by Nestor Rojas. 14707761 CANADA INC.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
