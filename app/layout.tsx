import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {ClerkProvider,} from "@clerk/nextjs";
import "./globals.css";
import { MobileNavbar } from "@/components/MobileNavBar";
import { Guarantee } from "@/components/Guarantee";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aetheris | Perfumes",
  description: "Scents in the air, memories in the ether",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <MobileNavbar/>
            {children}
            <Guarantee/>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
