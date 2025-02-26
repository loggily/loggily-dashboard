import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/ui/globals.css";
import LightDarkButton from "./ui/light-dark-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed inset-x-0 top-0 z-10 border-b border-emerald-500/25 dark:border-white/10">
          <div className="bg-white dark:bg-gray-950">
            <div className="flex h-14 items-center justify-between gap-8 px-4 sm:px-6">
              <div className="flex gap-4">
                <span className="text-xl font-bold text-emerald-500 shrink-0">Loggily Dashboard</span>
              </div>
              <div className="flex items-center gap-6 max-md:hidden">
                <LightDarkButton></LightDarkButton>
              </div>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
