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
  title: "Screen Time Hero - End the Screen Time Fights Forever",
  description: "Turn screen time battles into motivation. Parents assign tasks, kids complete with photo proof, earn points, and redeem for screen time. No negotiations needed.",
  keywords: ["screen time", "parental controls", "chore app", "kids tasks", "family app", "screen time management"],
  openGraph: {
    title: "Screen Time Hero - End the Screen Time Fights Forever",
    description: "Turn screen time battles into motivation. Kids earn screen time by completing tasks with photo proof.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
