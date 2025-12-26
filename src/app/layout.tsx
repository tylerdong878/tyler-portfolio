import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import MouseFollower from "@/components/MouseFollower";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Tyler Dong | Software Developer",
  description: "Portfolio of Tyler Dong",
  keywords: ["Software Developer", "Portfolio", "Tyler Dong"],
  authors: [{ name: "Tyler Dong" }],
  openGraph: {
    title: "Tyler Dong | Portfolio",
    description: "Portfolio of Tyler Dong",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-black text-white min-h-screen`}>
        <ParticleBackground />
        <MouseFollower />
        <Navigation />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
