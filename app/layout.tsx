import type { Metadata } from "next";
import localFont from "next/font/local";

import ConditionalNavBar from "./components/routPage/rout";

import "./globals.css";



export const metadata: Metadata = {
  title: "Logos Academy",
  description: "Curso Full-Stack JavaScript",
  icons: {
    icon: ["/logos-aba.png?v=100"],
    apple: ["/logos-aba.png?v=100"],
    shortcut: ["/logos-aba.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <ConditionalNavBar />
        {children}
      </body>
    </html>
  );
}