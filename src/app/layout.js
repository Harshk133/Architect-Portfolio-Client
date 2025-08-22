import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { ABeeZee } from "next/font/google";
import { AR_One_Sans } from 'next/font/google';
import { BRAND_NAME } from "./constants";

const arOneSans = AR_One_Sans({
  subsets: ['latin'],
  weight: ['400', '700'], // add weights you need
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const abeezee = ABeeZee({
  weight: "400", // available: 400 (normal), 400italic
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {BRAND_NAME},
  description: "Designing Spaces, Defining You.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${abeezee.className} ${arOneSans.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
