import type { Metadata } from "next";
import localFont from "next/font/local";
import "../../globals.css";

const geistSans = localFont({
  src: "../../fonts//GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Login Page | Notice Generator",
  description: "Automation Tool for Generating Notices",
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
        this is login
        {children}
      </body>
    </html>
  );
}
