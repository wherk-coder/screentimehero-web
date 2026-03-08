import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://screentimehero.com"),
  title: "Screen Time Hero - End the Screen Time Fights Forever",
  description: "Turn screen time battles into motivation. Parents assign tasks, kids complete with photo proof, earn points, and redeem for screen time. No negotiations needed.",
  keywords: ["screen time", "parental controls", "chore app", "kids tasks", "family app", "screen time management"],
  icons: {
    icon: "/favicon.png",
  },
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
        className={`${inter.variable} antialiased font-sans`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
