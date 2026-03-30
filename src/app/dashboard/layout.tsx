import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Gründer Marketing",
  description: "Website-KPI-Dashboard für marketing-gruender.de",
  robots: "noindex, nofollow",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
