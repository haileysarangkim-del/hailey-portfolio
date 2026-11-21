import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  style: "italic",
  variable: "--font-display",
  axes: ["SOFT", "WONK"],
});
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${profile.name} | Portfolio`,
  description: `${profile.tagline} ${profile.subtagline}`,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-bs-theme="light" className={display.variable}>
      <body>{children}</body>
    </html>
  );
}
