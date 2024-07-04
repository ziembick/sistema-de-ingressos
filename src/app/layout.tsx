import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevTicket - Compra de Ingressos",
  description: "Developed by Paulo Ziembick",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col min-h-screen items-center bg-primary text-default`}
      >
        <div className="p-4 md:p10 w-full max-w-[1256px]">
          <Navbar />
        {children}
        </div>
      </body>
    </html>
  );
}
