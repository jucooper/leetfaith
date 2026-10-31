import type { Metadata } from "next";
import ErrorPage from "@/components/ErrorPage";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return <ErrorPage status={404} />;
}
