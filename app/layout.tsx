"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "@/app/ui/globals.css";
import { Providers } from "./providers";
import { ThemeMode } from "./lib/definitions";
import { useState } from "react";
import DashboardHeader from "./ui/dashboard-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [themeMode, setThemeMode] = useState<ThemeMode>("light")

  function toggleThemeMode() {
    if (themeMode === "dark") {
      setThemeMode("light")
    } else {
      setThemeMode("dark")
    }
  }

  return (
    <html lang="en" className={`${themeMode} h-full`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full bg-white dark:bg-emerald-950`}
      >
        <Providers>
          <div className="flex flex-col h-full">
            <div className="fixed w-full">
              <DashboardHeader themeMode={themeMode} onToggle={toggleThemeMode}></DashboardHeader>
            </div>
            <div className="h-full pt-10">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
