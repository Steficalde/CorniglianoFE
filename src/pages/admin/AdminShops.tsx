import AdminLayout from '../../layouts/AdminLayout'
import { useContext, useEffect, useState } from 'react'
import { Auth } from '../../types/auth'
import AuthContext from '../../components/auth/AuthContext'
import { SERVER_URL } from '../../costants'
import Table from './Table'
import { useNavigate } from 'react-router-dom'
import { Shop } from "../../types/Shop";





export default function AdminShops(): JSX.Element {
  const { authFetch } = useContext(AuthContext) as Auth
  const [shops, setShops] = useState<Shop[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchShops = async () => {
      const response = await authFetch(`${SERVER_URL}/shops`)
      const data = await response.json()
      // FIXME: data is not an array
      setShops(data.data)
      console.log(data)
    }

    fetchShops().catch(console.error)
  }, [])




  return (
    <AdminLayout>
      <h1>Negozi</h1>
      <div className='mt-8 mb-8'>
        <button className='primary-button' onClick={() => {
         return navigate('/admin/shops/new')
        }}>
          Nuovo
        </button>
      </div>
      <Table>
        <>
          <Table.Head>
            <tr>
              <Table.Header>name</Table.Header>
              <Table.Header>address</Table.Header>
              <Table.Header>description</Table.Header>
              <Table.Header>googleMaps</Table.Header>
              <Table.Header>Altro</Table.Header>
            </tr>
          </Table.Head>
          <Table.Body>
            {shops.map((shop) => (
              <tr key={shop.id}>
                <Table.Data>{shop.user.name}</Table.Data>
                <Table.Data>{shop.address}</Table.Data>
                <Table.Data>{shop.description}</Table.Data>
                <Table.Data>{shop.googleMaps}</Table.Data>
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
          </Table.Body>
        </>
      </Table>
    </AdminLayout>
  )
}
