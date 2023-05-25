import { useRequireAdmin } from "../hooks/useRequireAdmin";
import AdminMenu from "../components/menu/AdminMenu";
import React from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  useRequireAdmin()
  return (
    <>
      <AdminMenu />
      <main className="container-xl mt-24">{children}</main>
    </>
  )
}
