import type { Metadata } from "next";
import { JetBrains_Mono, Metrophobic, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import SmoothScroll from "@/components/SmoothScroll";
import RouteLoader from "@/components/RouteLoader";

const playfairDisplay = Playfair_Display({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const metrophobicSans = Metrophobic({
  variable: "--font-metrophobic-sans",
  weight: "400",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Sarvan Kumar's Portfolio",
  description: "Portfolio of Nagarampalli Sarvan Kumar - Full-Stack Developer, showcasing projects, skills, and contact information.",
  alternates: {
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
};

import BottomBar from "@/components/BottomBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${playfairDisplay.variable} ${metrophobicSans.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <RouteLoader>
            <SmoothScroll>
              {children}
            </SmoothScroll>
          </RouteLoader>
          <BottomBar />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
