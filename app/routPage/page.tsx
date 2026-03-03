"use client";

import { usePathname } from "next/navigation";
import NavBar from "@/app/NavBar/page";

export default function ConditionalNavBar() {
  const pathname = usePathname();

  const hideRoutes = ["/empresa"];

  if (hideRoutes.includes(pathname)) {
    return null;
  }

  return <NavBar />;
}
