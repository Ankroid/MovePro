import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Western Packers & Movers - Professional Moving Services",
  description: "Western Packers & Movers - Professional packers and movers services. Safe, reliable, and affordable moving solutions for homes and offices across India. Get free quotes today!",
  keywords: "western packers movers, packers and movers pune, moving services, relocation, household shifting, local moving, domestic moving, car transport, bike transport, warehousing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
