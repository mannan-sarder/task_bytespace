import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_NAME } from "@/constants/site";
import { clashDisplay, poppins, satoshi } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(poppins.variable, satoshi.variable, clashDisplay.variable)}>
      <body>{children}</body>
    </html>
  );
}
