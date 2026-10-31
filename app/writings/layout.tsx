import SiteHeader from "@/components/SiteHeader";

export default function WritingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
    </>
  );
}
