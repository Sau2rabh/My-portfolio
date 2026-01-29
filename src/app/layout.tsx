import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import clsx from "clsx";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saurabh_Portfolio | Frontend Developer",
  description: "Immersive Portfolio of Saurabh Anand",
};

import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/ui/Header";
import CustomCursor from "@/components/ui/CustomCursor";
import Preloader from "@/components/ui/Preloader";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(inter.variable, roboto_mono.variable)}>
      <body className="antialiased bg-background text-foreground selection:bg-neon-blue selection:text-black">
        <SmoothScroll>
          <Preloader />
          <CustomCursor />

          <Header />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
