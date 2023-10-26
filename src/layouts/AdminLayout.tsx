import RequireAdmin from "../hooks/RequireAdmin";
import AdminMenu from "../components/menu/AdminMenu";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RequireAdmin>
      <>
        <AdminMenu />
        <main className="container-xl mt-24">{children}</main>
      </>
    </RequireAdmin>
  )
}
