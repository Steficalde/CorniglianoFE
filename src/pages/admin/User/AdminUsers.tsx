import AdminLayout from '../../../layouts/AdminLayout'
import { useContext, useEffect, useState } from 'react'
import { Auth } from '../../../types/auth'
import AuthContext from '../../../components/auth/AuthContext'
import Table from '../Table'
import { useNavigate } from 'react-router-dom'
import { SERVER_URL } from '../../../costants'
import { getLocaleDate } from '../../../functions'

export default function AdminUsers(): JSX.Element {
  const { authFetch } = useContext(AuthContext) as Auth
  const [users, setUsers] = useState<any[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await authFetch(`${SERVER_URL}/users`)
      const data = await response.json()
      setUsers(data)
    }

    fetchUsers().catch(console.error)
  }, [])

  return (
    <AdminLayout>
      <h1>Utenti</h1>

      <Table>
        <>
          <Table.Head>
            <tr>
              <Table.Header>Nome</Table.Header>
              <Table.Header>Email</Table.Header>
              <Table.Header>Data iscrizione</Table.Header>
              <Table.Header>Altro</Table.Header>
            </tr>
          </Table.Head>
          <Table.Body>
            <>
              {users.map((user) => (
                <tr key={user.id}>
                  <Table.Data>{user.name}</Table.Data>
                  <Table.Data>{user.email}</Table.Data>
                  <Table.Data>{getLocaleDate(user.createdAt)}</Table.Data>
                  <Table.Data>
                    <button
                      onClick={() => navigate(`/admin/users/${user.id}`)}
                      className="primary-button"
                    >
                      Modifica
                    </button>
                  </Table.Data>
                </tr>
              ))}
            </>
          </Table.Body>
        </>
      </Table>
    </AdminLayout>
  )
}
