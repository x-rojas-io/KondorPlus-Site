import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://kondorplus.net'),
  title: {
    default: "Kondor Plus Consulting | Custom Data Systems & Applied AI",
    template: "%s | Kondor Plus Consulting",
  },
  description: "We build custom systems around your data to uncover customer insights, automate workflows, and drive business growth—closing the gap between expensive enterprise technology and growing businesses.",
  openGraph: {
    title: "Kondor Plus Consulting | Custom Data Systems & Applied AI",
    description: "We build custom systems around your data to uncover customer insights, automate workflows, and drive business growth—closing the gap between expensive enterprise technology and growing businesses.",
    url: 'https://kondorplus.net',
    siteName: 'Kondor Plus Consulting',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kondor Plus Consulting | Custom Data Systems & Applied AI",
    description: "We build custom systems around your data to uncover customer insights, automate workflows, and drive business growth—closing the gap between expensive enterprise technology and growing businesses.",
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
