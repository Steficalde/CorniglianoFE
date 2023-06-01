import RequireAdmin, { requireAdmin } from '../hooks/RequireAdmin'
import AdminMenu from '../components/menu/AdminMenu'
import React, { useEffect } from 'react'

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
