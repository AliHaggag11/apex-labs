import type { Metadata } from "next";
import { Providers } from "./providers";
import Footer from "./components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apex Labs - Digital Transformation & AI Solutions",
  description: "Transform your business with cutting-edge digital solutions and AI automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Afacad:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-afacad antialiased">
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
