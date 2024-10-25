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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();
  const isAdminRoute = pathname.includes("admin");

  return (
    <html lang="en">
      <body>
        <AncestorProvider>
          <MuiProvider>
            <ToastContainer />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                backgroundColor: "#F7F7F8",
              }}
            >
              {!isAdminRoute && <Header />}
              <Box component="main" sx={{ flex: 1 }}>
                <ToastContainer />
                {children}
              </Box>
              {isAdminRoute ? null : <Footer />}
            </Box>
            <Toaster />
          </MuiProvider>
        </AncestorProvider>
      </body>
    </html>
  );
}
