import type { Metadata } from 'next';
import LayoutClient from './layoutClient';

export const metadata: Metadata = {
  title: 'kaffee',
  description: 'Portfolio site',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}