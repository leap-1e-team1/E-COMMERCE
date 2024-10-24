"use client";

import { usePathname } from "next/navigation";
import localFont from "next/font/local";
import "./globals.css";
import { MuiProvider } from "@/provider/MuiProvider";
import { AncestorProvider } from "@/provider/UserProvider"; // Import the UserProvider
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
// aa
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();
  console.log(pathname, "pathname");

  const isAdminRoute = pathname.includes("admin");

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AncestorProvider>
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
              <Box component="main" sx={{ flex: 1, marginTop: "68px" }}>
                {children}
              </Box>
              {pathname.includes("admin") ? <></> : <Footer />}
            </Box>
          </MuiProvider>
          <Toaster />
        </AncestorProvider>
      </body>
    </html>
  );
}
