import "./globals.css";
import { Montserrat_Alternates as FontSans } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

import { cn } from "@/lib/utils";
import Navbar from "@/components/client/Navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "500"
});

export const metadata = {
  title: "Home | Jeremiah's Portfolio"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar />
        <main className='mt-[104px]'>{children}</main>
        <Toaster
          duration={5000}
          position='bottom-center'
          closeButton={true}
          visibleToasts={5}
        />
      </body>
    </html>
  );
}
