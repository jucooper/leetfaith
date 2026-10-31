import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "leetfaith",
    template: "%s | leetfaith",
  },
  description:
    "Matthew 13:37",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="site-main">{children}</main>
      </body>
    </html>
  );
}
