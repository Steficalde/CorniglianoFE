import AdminLayout from '../../layouts/AdminLayout'
import { useContext } from 'react'
import AuthContext from '../../components/auth/AuthContext'
import { Auth } from '../../types/auth'

export default function Admin(): JSX.Element {
  const { authFetch } = useContext(AuthContext) as Auth
  return (
    <AdminLayout>
      <h1>Dashboard</h1>
    </AdminLayout>
  )
}
