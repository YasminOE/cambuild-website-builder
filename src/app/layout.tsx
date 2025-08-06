import type { Metadata } from "next";
import "./globals.css";
import { nataSans, humane } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "CAMBUILD - Create Beautiful Websites",
  description: "Build beautiful websites with CAMBUILD's intuitive drag-and-drop website builder. No coding required.",
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nata+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${humane.variable} ${nataSans.className} antialiased`} style={nataSans.style}>
        {children}
      </body>
    </html>
  );
}
