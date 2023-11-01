import AdminLayout from '../../../layouts/AdminLayout'
import { useContext, useEffect, useState } from 'react'
import { Auth } from '../../../types/auth'
import AuthContext from '../../../components/auth/AuthContext'
import { SERVER_URL } from '../../../costants'
import Table from '../Table'
import { useNavigate } from 'react-router-dom'
import { ShopType } from './shop.type'

export default function AdminShops(): JSX.Element {
  const { authFetch } = useContext(AuthContext) as Auth
  const [shops, setShops] = useState<ShopType[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchShops = async () => {
      const response = await authFetch(`${SERVER_URL}/shops/all`)
      const data = await response.json()
      setShops(data)
    }

    fetchShops().catch(console.error)
  }, [])

  return (
    <AdminLayout>
      <h1>Negozi</h1>
      <div className="mt-8 mb-8">
        <button
          className="primary-button"
          onClick={() => {
            return navigate('/admin/shops/new')
          }}
        >
          Nuovo
        </button>
      </div>
      <Table>
        <>
          <Table.Head>
            <tr>
              <Table.Header>Nome</Table.Header>
              <Table.Header>Indirizzo</Table.Header>
              <Table.Header>Altro</Table.Header>
            </tr>
          </Table.Head>
          <Table.Body>
            <>
              {shops.map((shop) => (
                <tr key={shop.id}>
                  <Table.Data>{shop.user.name}</Table.Data>
                  <Table.Data>{shop.address}</Table.Data>
                  <Table.Data>
                    <button
                      onClick={() => navigate(`/admin/shops/${shop.id}`)}
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
