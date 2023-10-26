import { useParams } from 'react-router-dom'
import AdminLayout from '../../../layouts/AdminLayout'
import { ShopType } from './shop.type'
import React, { useContext, useState } from 'react'
import { SERVER_URL } from '../../../costants'
import { Auth } from '../../../types/auth'
import AuthContext from '../../../components/auth/AuthContext'
import LabelTextInput from '../../../components/input/LabelTextInput'

const AdminShopCreate = () => {
  const { id } = useParams<{ id: string }>()
  const { authFetch } = useContext(AuthContext) as Auth
  const [Shop, setShop] = useState<Partial<ShopType> | null>({
    description: '',
    address: '',
    user: {
      name: '',
      avatar: '',
      email: '',
      password: '',
    },
  })
  const [status, setStatus] = useState<string>('')
  const [isError, setIsError] = useState<boolean>(false)

  const handleShopChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setShop({ ...(Shop as ShopType), [name]: value })
    if (name === 'name' || name === 'email' || name === 'password' || name === 'avatar') {
      setShop({
        ...(Shop as ShopType),
        user: { ...(Shop as ShopType).user, [name]: value },
      })
    }
  }
  const submit = async () => {
    const responseUser = await authFetch(`${SERVER_URL}/users/${id}`, {
      method: 'POST',
      body: JSON.stringify({
        name: Shop?.user?.name,
        email: Shop?.user?.email,
        avatar: Shop?.user?.avatar,
        password: Shop?.user?.password,
        confirmPassword: Shop?.user?.password,
      }),
    })
    const newUser = await responseUser.json()
    const response = await authFetch(`${SERVER_URL}/shops/${id}`, {
      method: 'POST',
      body: JSON.stringify({
        id: newUser.id,
        description: Shop?.description,
        address: Shop?.address,
      }),
    })
    if (!responseUser.ok) {
      const data = await responseUser.json()
      setIsError(true)
      setStatus(data.message)
    } else {
      setIsError(false)
      setStatus('Creazione avvenuta con successo!')
      setTimeout(() => {
        setStatus('')
      }, 3000)
    }
    if (!response.ok) {
      const data = await response.json()
      setIsError(true)
      setStatus(data.message)
    } else {
      setIsError(false)
      setStatus('Creazione avvenuta con successo!')
      setTimeout(() => {
        setStatus('')
      }, 3000)
    }
  }
  return (
    <AdminLayout>
      <h1>Nuovo negozio</h1>
      <section className={'max-w-[600px] flex flex-col gap-4 mt-10 mb-20'}>
        <LabelTextInput
          type={'text'}
          name={'name'}
          onChange={handleShopChange}
          value={Shop?.user?.name ?? ''}
        ></LabelTextInput>
        <LabelTextInput
          type={'email'}
          name={'email'}
          onChange={handleShopChange}
          value={Shop?.user?.email ?? ''}
        ></LabelTextInput>
        <LabelTextInput
          type={'text'}
          name={'password'}
          onChange={handleShopChange}
          value={Shop?.user?.password ?? ''}
        ></LabelTextInput>
        <LabelTextInput
          type={'text'}
          name={'avatar'}
          onChange={handleShopChange}
          value={Shop?.user?.avatar ?? ''}
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
          {status.slice(0, 1).toUpperCase() + status.slice(1)}
        </div>
        <div className="flex justify-end">
          <button onClick={submit} className="primary-button">
            Crea
          </button>
        </div>
      </section>
    </AdminLayout>
  )
}
export default AdminShopCreate
