import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

// Load fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-serif',
});

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ["latin"],
  variable: '--font-sans',
});

// THIS SECTION CONTROLS THE TAB TITLE AND ICON
export const metadata: Metadata = {
  title: "Soluxe Homes | Verified Real Estate in Nigeria",
  description: "Secure verified lands and premium homes in Abuja and Lagos. 100% litigation-free.",
  icons: {
    icon: '/images/logo.png', // <--- This sets your logo as the tab icon
    apple: '/images/logo.png', // <--- This sets the icon if someone saves to iPhone home screen
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}