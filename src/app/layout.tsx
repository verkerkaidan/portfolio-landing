import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Projects & About",
  description:
    "Explore my projects and learn more about me - a developer passionate about building modern web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-linear-to-br from-slate-50 to-blue-50 min-h-screen`}
      >
        <main className="flex min-h-screen w-full max-w-5xl flex-col items-start justify-start py-8 md:py-12 px-4 sm:px-6 md:px-8 mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
