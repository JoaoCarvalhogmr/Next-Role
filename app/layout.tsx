import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "./providers";

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: "NextRole",
  description: "Effortlessly manage and track your job applications with NextRole, the perfect tool for job seekers aiming to stay organized and on top of their career journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl={"/"}> 
    <html lang="en" suppressHydrationWarning>
      <body
        className={inter.className}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
    </ClerkProvider>
  );
}
