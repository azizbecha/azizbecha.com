import type { Metadata } from "next";

import { Toaster } from "react-hot-toast";

import AnimatedCursor from "react-animated-cursor"

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSInit from "@/components/AOSInit";
import ProgressBar from "@/components/ProgressBar";
import ScrollToTopButton from "@/components/ScrollToTopButton";

import "./globals.css";

export const metadata: Metadata = {
  title: "Aziz Becha",
  description: "Certified Nerd building products and projects. Welcome to my digital space.",
  creator: "Aziz Becha",
  openGraph: {
    type: "website",
    title: "Aziz Becha",
    description: "Welcome to my digital space, a place where you can explore and discover a variety of blogs about code, business strategies, and life experiences. This space is not just about my own posts; it's a collaborative platform where other hobbyists and experts share their insights and knowledge too. Whether you're a fellow tech enthusiast, an aspiring entrepreneur, or someone looking for inspiration, you'll find valuable content here to fuel your journey. Dive in and join the community!",
    images: "../azizbecha.jpg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-grey">
      <body>
        <Navbar />
        <Toaster />
        <AOSInit />
        <ProgressBar />
        <ScrollToTopButton />
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          trailingSpeed={3}
          innerStyle={{
            backgroundColor: "#BB2649"
          }}
          outerStyle={{
            border: '3px solid #fff'
          }}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}