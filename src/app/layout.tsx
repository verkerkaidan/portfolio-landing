import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen`}
      >
        {/* Navbar */}
        <nav className="w-full flex items-center justify-center px-6 md:px-8 py-5 bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
          <div className="flex gap-8">
            <Link
              href="/"
              className="text-base md:text-lg font-semibold text-slate-700 px-3 py-2 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 rounded"
            >
              {"Projecten"}
            </Link>
            <Link
              href="/about"
              className="text-base md:text-lg font-semibold text-slate-700 px-3 py-2 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 rounded"
            >
              {"Over mij"}
            </Link>
          </div>
        </nav>
        <main className="flex min-h-screen w-full max-w-5xl flex-col items-start justify-start py-8 md:py-12 px-4 sm:px-6 md:px-8 mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
