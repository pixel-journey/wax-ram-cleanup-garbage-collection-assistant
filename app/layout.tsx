import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'A byte estimate, not a scan',
  description: '8 bytes per field name plus the value size. One unsigned buyrambytes for the shortfall. No table is scanned.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
