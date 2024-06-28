import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";

const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Soccer Bet | Your Best Choice",
  description: "Soccer Bet - A Pet project created by S-Terra-Soft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
