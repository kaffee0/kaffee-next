'use client'

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./header";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "kaffee",
  description: "Portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    let bg = '#ffffff'; // default

    if (pathname.startsWith('/apps')) {
      bg = '#d8f3dc';
    } else if (pathname.startsWith('/designs')) {
      bg = '#fde2ff';
    } else if (pathname.startsWith('/photos')) {
      bg = '#e4f9f5';
    } else if (pathname.startsWith('/profile')) {
      bg = '#fff1f3';
    }

    root.style.setProperty('--background', bg);
  }, [pathname]);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}