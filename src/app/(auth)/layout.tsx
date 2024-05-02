import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import type { Metadata } from "next";
import { HeaderAuth } from "./components";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Autenticacion",
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
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
          <HeaderAuth/>
          {children}
        </body>
    </html>
  );
}
