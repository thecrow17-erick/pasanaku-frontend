import "./globals.css";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { ProviderQuery } from "@/lib/ProviderQuery";
import { ProtectedRoute } from "@/components/ProtectedRoutePlayer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export default function RootLayout({ children }:Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ProviderQuery>
          {children}
        </ProviderQuery>
      </body>
    </html>
  )
}