import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Wishday',
  description: 'Wishday App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
