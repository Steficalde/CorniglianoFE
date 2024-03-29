import { useNavigate, useParams } from 'react-router-dom'
import AdminLayout from '../../../layouts/AdminLayout'

import React, { useContext, useEffect, useState } from 'react'
import { SERVER_URL } from '../../../costants'
import { Auth } from '../../../types/auth'
import AuthContext from '../../../components/auth/AuthContext'
import LabelTextInput from '../../../components/input/LabelTextInput'
import { ShopType } from './shop.type'
import Modal from '../../../components/Modal'

const ShopPage = () => {
  const { id } = useParams<{ id: string }>()
  const { authFetch } = useContext(AuthContext) as Auth
  const [Shop, setShop] = useState<any | null>(null)
  const [status, setStatus] = useState<string>('')
  const [isError, setIsError] = useState<boolean>(false)
  const [show, setShow] = useState<boolean>(false)
  const navigate = useNavigate()

  const changeModal = () => {
    setShow(!show)
  }

  useEffect(() => {
    const fetchShop = async () => {
      const response = await authFetch(`${SERVER_URL}/shops/${id}`)
      const data: ShopType = await response.json()

      setShop({
        name: data.user.name,
        email: data.user.email,
        avatar: data.user.avatar,
        description: data.description,
        address: data.address,
      })
    }
    fetchShop().catch(console.error)
  }, [])

  const handleShopChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setShop({ ...Shop, [name]: value })
  }
  const submit = async () => {
    const response = await authFetch(`${SERVER_URL}/shops/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        description: Shop?.description,
        address: Shop?.address,
        name: Shop?.name,
        email: Shop?.email,
        avatar: Shop?.avatar,
      }),
    })

    if (!response.ok) {
      const data = await response.json()
      setIsError(true)
      setStatus(data.message.isArray ? data.message.join(' ') : data.message)
    } else {
      setIsError(false)
      setStatus('Modifica avvenuta con successo!')
      setTimeout(() => {
        setStatus('')
      }, 3000)
    }
  }

  const deleteShop = async () => {
    const responseUser = await authFetch(`${SERVER_URL}/users/${id}`, {
      method: 'DELETE',
    })
    if (!responseUser.ok) {
      const data = await responseUser.json()
      setIsError(true)
      setStatus(data.message.isArray ? data.message.join(' ') : data.message)

      return
    } else {
      return navigate('/admin/shops')
    }
  }

  return (
    <AdminLayout>
      <h1>Negozio {Shop?.id}</h1>
      <section className={'max-w-[600px] flex flex-col gap-4 mt-10'}>
        <LabelTextInput
          type={'text'}
          name={'name'}
          onChange={handleShopChange}
          value={Shop?.name ?? ''}
        ></LabelTextInput>
        <LabelTextInput
          type={'text'}
          name={'email'}
          onChange={handleShopChange}
          value={Shop?.email ?? ''}
        ></LabelTextInput>
        <LabelTextInput
          type={'text'}
          name={'avatar'}
          onChange={handleShopChange}
          value={Shop?.avatar ?? ''}
        ></LabelTextInput>
        <LabelTextInput
          type={'text'}
          name={'description'}
          onChange={handleShopChange}
          value={Shop?.description ?? ''}
        ></LabelTextInput>
        <LabelTextInput
          type={'text'}
          name={'address'}
          onChange={handleShopChange}
          value={Shop?.address ?? ''}
        ></LabelTextInput>

        <div className={`${isError ? 'text-red-700' : ''}`}>
          {status}
        </div>
        <div className="flex justify-end">
          <button onClick={changeModal} className="warn-button">
            Elimina
          </button>
          <button onClick={submit} className="primary-button">
            Salva
          </button>
        </div>
      </section>
      <Modal show={show} changeModal={changeModal} title={'Shop'}>
        <p className={'mb-4'}>Vuoi veramente cancellarlo?</p>
        <div className="flex justify-end gap-4">
          <button onClick={changeModal} className="prima-button">
            Annulla
          </button>
          <button
            onClick={async () => {
              await deleteShop()
              changeModal()
            }}
            className="warn-button"
          >
            Conferma
          </button>
        </div>
      </Modal>
    </AdminLayout>
  )
}
export default ShopPage
