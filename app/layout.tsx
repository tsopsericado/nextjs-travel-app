import type { Metadata } from "next";
import "./globals.css";
// import Footer from "@/components/Footer";
import Navbar from "@/components/molecules/Navbar";
import Footer from "@/components/molecules/Footer";


export const metadata: Metadata = {
  title: "Travel",
  description: "Travel UI/UX App for Camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
      </body>
      <Footer />
    </html>
  );
}
