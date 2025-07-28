'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Header from './header';
import './globals.css';

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    let bg = '#ffffff';

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
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}