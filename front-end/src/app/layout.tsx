"use client";

import { usePathname } from "next/navigation";
import localFont from "next/font/local";
import "./globals.css";
import { MuiProvider } from "@/provider/MuiProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Box } from "@mui/material";
import { Toaster } from "sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  console.log(pathname, " pathname pathname pathname pathname");

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MuiProvider>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
              backgroundColor: "#F7F7F8",
            }}
          >
            {pathname.includes("admin") ? <></> : <Header />}
            <Box component="main" sx={{ flex: 1 }}>
              {children}
            </Box>
            {pathname.includes("admin") ? <></> : <Footer />}
          </Box>
        </MuiProvider>
        <Toaster />
      </body>
    </html>
  );
}
