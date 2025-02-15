import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/ui/navigation";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammet Arif Sarıkaya | Full Stack Developer",
  description: "Personal website of Muhammet Arif Sarıkaya, a Full Stack Developer specializing in React, Next.js, and .NET technologies.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Flutter", ".NET"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background antialiased`}>
        <Navigation />
        <main className="relative flex min-h-screen flex-col">
          {children}
        </main>
        <GoogleAnalytics gaId="G-YBR7SSPKWQ" />
      </body>
    </html>
  );
}
