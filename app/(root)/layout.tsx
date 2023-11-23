import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FlixFlex",
  description: "A movie app made using next.js 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-gray-900`}>
          <main className="w-full h-full text-gray-50">
            <NavBar></NavBar>
            {children}
            <Footer></Footer>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
