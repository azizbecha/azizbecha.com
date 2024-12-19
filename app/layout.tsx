import type { Metadata } from "next";

import Head from "next/head";
import Script from "next/script";

import { Toaster } from "react-hot-toast";

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
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FWDGX8HTQ1" />
      <Head>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_GA_ID}');
          `}
        </script>
      </Head>
      <Script id="clarity-script" strategy="afterInteractive" type="text/javascript">
        {`(function(c,l,a,r,i,t,y){
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${process.env.NEXT_CLARITY_ID}");`}
      </Script>
      <body>
        <Navbar />
        <Toaster />
        <AOSInit />
        <ProgressBar />
        <ScrollToTopButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}