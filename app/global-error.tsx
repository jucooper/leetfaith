"use client";

import { useEffect } from "react";
import ErrorPage from "@/components/ErrorPage";
import "./globals.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <main className="site-main">
          <ErrorPage status={500} retry={reset} />
        </main>
      </body>
    </html>
  );
}
