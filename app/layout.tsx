import type { Metadata } from "next";

import "./globals.css";
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";


export const metadata: Metadata = {
  title: "ArchitectX",
  description: "kuch toh banaya h",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <SmoothScrollWrapper>
        {children}
        </SmoothScrollWrapper>
      </body>
    </html>
  );
}
