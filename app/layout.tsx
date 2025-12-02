import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryClientWrapper from "@/providers/QueryClientWrapper";
import Header from "@/components/header";
import { Toaster } from "react-hot-toast";


export const metadata: Metadata = {
  title: "Customer Management",
  description: "App to manage customers",
}; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryClientWrapper >
          <Header />
           <Toaster position="top-right" />
          <main style={{ backgroundColor: "#2b2b2b", minHeight: "100vh", padding: "2rem"}}>{children}</main>
        </QueryClientWrapper>
      </body>
    </html>
  );
}
