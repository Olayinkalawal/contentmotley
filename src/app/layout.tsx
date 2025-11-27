import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Content Motley – Africa's Premier Creator Service Provider",
  description: "Content Motley is Africa's leading creator service provider helping creators, filmmakers and media brands grow on YouTube. Channel management, monetization, brand deals and rights protection.",
  keywords: ["YouTube", "creator", "Africa", "monetization", "MCN", "content", "brand deals", "channel management", "African creators", "media"],
  authors: [{ name: "Sholz S. Laelle" }],
  openGraph: {
    title: "Content Motley – Africa's Premier Creator Service Provider",
    description: "Managed by experts. Built for top creators. Turn views into long-term revenue with Africa's YouTube-first team.",
    type: "website",
    locale: "en_US",
    siteName: "Content Motley",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Motley – Africa's Premier Creator Service Provider",
    description: "Managed by experts. Built for top creators. Turn views into long-term revenue with Africa's YouTube-first team.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.cdnfonts.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.cdnfonts.com/css/cabinet-grotesk?styles=156262,156258,156260,156254,156256" 
          rel="stylesheet" 
        />
        <link 
          href="https://fonts.cdnfonts.com/css/satoshi?styles=135009,135005,135007,135003" 
          rel="stylesheet" 
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[var(--color-primary)] text-white">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
