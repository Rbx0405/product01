import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import { SearchProvider } from "./context/SearchContext";
import Navbar from "./components/Navbar";
import SearchModal from "./components/SearchModal";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fashion Store - Your Ultimate Fashion Destination",
  description: "Discover the latest trends in fashion. Shop for men, women, and kids clothing at the best prices.",
  keywords: "fashion, clothing, online shopping, men's fashion, women's fashion, kids wear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <SearchProvider>
            <Navbar />
            <SearchModal />
            {children}
          </SearchProvider>
        </CartProvider>
      </body>
    </html>
  );
}
