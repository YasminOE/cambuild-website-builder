import type { Metadata } from "next";
import "./globals.css";
import { nataSans, humane } from "@/lib/fonts";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "CAMBUILD - Create Beautiful Websites",
  description: "Build beautiful websites with CAMBUILD's intuitive drag-and-drop website builder. No coding required.",
  icons: {
    icon: '/logo.png',
  },
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${humane.variable} ${nataSans.className} ${inter.className} antialiased`} style={nataSans.style}>
        {children}
      </body>
    </html>
  );
}
