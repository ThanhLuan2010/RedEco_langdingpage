import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-montserrat",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Chọn các trọng số từ 100 đến 900
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "REDECO",
  description: "REDECO LANDING PAGE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.className} antialiased`}
      >
        <Header />

        {children}
      </body>
    </html>
  );
}
