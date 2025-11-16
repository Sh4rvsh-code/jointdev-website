import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JointDev - AI-Powered Development Studio",
  description: "Two-person AI-powered development studio. We build software 10x faster.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
