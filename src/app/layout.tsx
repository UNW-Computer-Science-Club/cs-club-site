import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "react-loading-skeleton/dist/skeleton.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "UNW CS Club",
  description:
    "This is the official site of University of Northwestern " +
    "- St.Paul's very own Computer Science Club.",
  metadataBase: new URL("https://unwcsclub.dev"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className="bg-background text-foreground">
        <div className="container mx-auto min-h-screen max-w-6xl">
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
        </div>
        <div className="flex gap-4 pb-10">
          <Footer />
        </div>
      </body>
    </html>
  );
}
