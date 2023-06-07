import AdminLayout from '../../layouts/AdminLayout'
import { useContext, useEffect, useState } from 'react'
import { Auth } from '../../types/auth'
import AuthContext from '../../components/auth/AuthContext'
import { SERVER_URL } from '../../costants'
import Table from './Table'
import { useNavigate } from 'react-router-dom'
import { Award } from './Award/award.type'

export default function AdminAwards(): JSX.Element {
  const { authFetch } = useContext(AuthContext) as Auth
  const [awards, setAwards] = useState<Award[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchAwards = async () => {
      const response = await authFetch(`${SERVER_URL}/awards`)
      const data = await response.json()
      setAwards(data)
      console.log(data)
    }

    fetchAwards().catch(console.error)
  }, [])

  return (
    <AdminLayout>
      <h1>Premi</h1>
      <div className="mt-8 mb-8">
        <button
          className="primary-button"
          onClick={() => {
            return navigate('/admin/awards/new')
          }}
        >
          Nuovo
        </button>
      </div>
      <Table>
        <>
          <Table.Head>
            <tr>
              <Table.Header>Titolo</Table.Header>
              <Table.Header>Costo</Table.Header>
              <Table.Header>Quantità</Table.Header>
              <Table.Header>Altro</Table.Header>
            </tr>
          </Table.Head>
          <Table.Body>
            {awards.map((award) => (
              <tr key={award.id}>
                <Table.Data>{award.title}</Table.Data>
                <Table.Data>{award.cost}</Table.Data>
                <Table.Data>{award.quantity}</Table.Data>
                <Table.Data>
                  <button
                    onClick={() => navigate(`/admin/awards/${award.id}`)}
                    className="primary-button"
                  >
                    Modifica
                  </button>
                </Table.Data>
              </tr>
            ))}
          </Table.Body>
        </>
      </Table>
    </AdminLayout>
  )
}
