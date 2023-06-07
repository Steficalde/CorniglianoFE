import AdminLayout from '../../layouts/AdminLayout'
import { useContext, useEffect, useState } from 'react'
import { Auth } from '../../types/auth'
import AuthContext from '../../components/auth/AuthContext'
import { SERVER_URL } from '../../costants'
import Table from './Table'
import { useNavigate } from 'react-router-dom'


export default function Dashboard(): JSX.Element {
  const { authFetch } = useContext(AuthContext) as Auth
  const [users, setUsers] = useState<any[]>([])
  const navigate = useNavigate()


  return (
    <AdminLayout>
      <h1>Utenti</h1>

      <Table>
        <>
          <Table.Head>
            <tr>
              <Table.Header>Nome</Table.Header>
              <Table.Header>Email</Table.Header>
              <Table.Header>Iscrizione</Table.Header>

            </tr>
          </Table.Head>
          <Table.Body>
            {users.map((user) => (
              <tr key={user.id}>
                <Table.Data>{user.name}</Table.Data>
                <Table.Data>{user.email}</Table.Data>
                <Table.Data>{user.createdAt}</Table.Data>

              </tr>
            ))}
          </Table.Body>
        </>
      </Table>
    </AdminLayout>
  )
}
