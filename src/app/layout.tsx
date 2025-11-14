import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import HashRouter from '../components/HashRouter';
import Providers from "@/lib/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SAOA",
  description: "Smart AI Outreach Automation is a cross-platform browser extension designed to streamline and personalize your outreach process on different platforms",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <Providers>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Render a client-side hash router to support extension popup routing */}
        {children}
        {/*<HashRouter />*/}
      </body>
    </Providers>
    </html>
  );
}
