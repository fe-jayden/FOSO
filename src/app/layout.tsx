import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FSO App",
  description: "FSO Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} flex justify-center `}>
        <Navbar />
        <div className="container pt-[100px]">
          <Breadcrumb />
          <div className="pt-18 font-['Raleway']">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}