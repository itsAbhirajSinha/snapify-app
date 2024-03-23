import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import "./globals.css";

const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
weight:['400','500','600','700'],
variable:'--font-ibm-plex'
});
// Modified metadata
export const metadata: Metadata = {
  title: "Snapify",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Applied fonts
    // add barand color to all the pages
    <ClerkProvider appearance={{
      variables:{ colorPrimary:'#624cf5'}
    }}>
    <html lang="en">
      <body className={cn("font-IBMPlex antialiased",IBMPlex.variable)}>
        {children}</body>
    </html>
    </ClerkProvider>
  );
}
