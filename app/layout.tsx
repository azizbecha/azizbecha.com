import type { Metadata } from "next";

import { Toaster } from "react-hot-toast";

import AnimatedCursor from "react-animated-cursor"

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSInit from "@/components/AOSInit";
import ProgressBar from "@/components/ProgressBar";

import "./globals.css";

export const metadata: Metadata = {
  title: "Aziz Becha",
  description: "Certified Nerd building products and projects. Welcome to my digital space.",
  creator: "Aziz Becha",
  openGraph: {
    type: "website",
    title: "Aziz Becha",
    description: "Certified Nerd building products and projects. Welcome to my digital space."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Navbar />
        <Toaster />
        <AOSInit />
        <ProgressBar />
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
