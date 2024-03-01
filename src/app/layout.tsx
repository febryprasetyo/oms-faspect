import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { NextThemesProvider } from "@/services/providers/NextThemeProvider";
import MainContainer from "@/components/layout/MainContainer";
import AuthProvider from "@/services/providers/AuthProvider";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fastpect",
  description: "Fastpect is a fast and modern IOT Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-slate-50 text-slate-700 dark:bg-dark dark:text-white`}
      >
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <Sidebar />
            <Header />
            <MainContainer>{children}</MainContainer>
          </AuthProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
