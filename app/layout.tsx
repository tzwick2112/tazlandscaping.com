import type { PropsWithChildren } from "react";

import { Metadata } from "next";
import { Raleway, Roboto } from "next/font/google";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";

import { cn } from "@/utils";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { Toaster } from "@/components/ui/toaster";

import { META_DATA } from "@/constants/meta";

import "./globals.css";

const raleway = Raleway({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-raleway",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-roboto",
});

export const metadata: Metadata = META_DATA;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icons/leaf-4.png"
        />
      </head>
      <body className={cn("flex flex-col min-h-screen", roboto.variable, raleway.variable)}>
        <ScrollToTop />
        <Header />
        <main className="flex-grow flex flex-col min-h-[600px]">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

