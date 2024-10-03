import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Nav from "./components/NavBar/navBar"

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
  title: "Logos Academy",
  description: "Curso Full-Stack JavaScript",
  icons:{
    icon: ['/logos-aba.png?v=100'],
    apple:['/logos-aba.png?v=100'],
    shortcut:['/logos-aba.png']
  }
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
        <Nav />
        {children}
      </body>
    </html>
  );
}
