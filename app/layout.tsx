import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leet Faith",
  description: "Matthew 13:37",
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
