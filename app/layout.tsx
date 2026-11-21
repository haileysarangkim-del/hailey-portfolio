import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${profile.name} | Portfolio`,
  description: `${profile.tagline} ${profile.subtagline}`,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-bs-theme="light">
      <body>{children}</body>
    </html>
  );
}
