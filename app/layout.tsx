"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "@/app/ui/globals.css";
import LightDarkButton from "./ui/light-dark-button";
import { Providers } from "./providers";
import { ThemeMode } from "./lib/definitions";
import { useState } from "react";

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
    <html lang="en" className={themeMode}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="fixed inset-x-0 top-0 z-10 border-b border-emerald-500/25 dark:border-white/10">
            <div className="bg-white dark:bg-emerald-950">
              <div className="flex h-14 items-center justify-between gap-8 px-4 sm:px-6">
                <div className="flex gap-4">
                  <span className="text-xl font-bold text-emerald-500 shrink-0">Loggily Dashboard</span>
                </div>
                <div className="flex items-center gap-6 max-md:hidden">
                  <LightDarkButton themeMode={themeMode} onToggle={toggleThemeMode}></LightDarkButton>
                </div>
              </div>
            </div>
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
