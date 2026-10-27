import type { Metadata, Viewport } from "next";
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
  title: "HEXAI Telemetry | High-Performance Basketball Analytics & AI Coaching",
  description:
    "Turn basketball performance into a clearer path forward. HEXAI connects athletes, coaches, and scouts through game film, performance analytics, and personalized development.",
  keywords: [
    "basketball analytics",
    "sports telemetry",
    "AI coach",
    "basketball scouting",
    "game film analysis",
    "court tracking",
    "Vance-LLM",
  ],
  authors: [{ name: "HEXAI Telemetry Systems Inc." }],
};

export const viewport: Viewport = {
  themeColor: "#111318",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface antialiased selection:bg-court-blaze selection:text-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
