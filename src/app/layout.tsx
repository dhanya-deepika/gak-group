// 
"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { sora } from "./fonts"; // import the font
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const hideFooterRoutes = ["/projects"];

  return (
    <html lang="en">
      <body className={sora.className}>
        <Navbar />
        <main>{children}</main>
        {!hideFooterRoutes.includes(pathname) && <Footer />}
      </body>
    </html>
  );
}
