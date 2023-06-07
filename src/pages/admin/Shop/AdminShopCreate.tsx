import { useParams } from 'react-router-dom'
import AdminLayout from '../../../layouts/AdminLayout'
import { Shop } from '../../../types/Shop'
import React, { useContext, useEffect, useState } from 'react'
import { SERVER_URL } from '../../../costants'
import { Auth } from '../../../types/auth'
import AuthContext from '../../../components/auth/AuthContext'
import LabelTextInput from '../../../components/input/LabelTextInput'

const AdminShopCreate = () => {
  const { id } = useParams<{ id: string }>()
  const { authFetch } = useContext(AuthContext) as Auth
  const [Shop, setShop] = useState<Partial<Shop> | null>({
    name: '',
    description: '',
    address: '',
    googleMaps: '',
    user: {
      name: '',
      email: '',
      password: '',
    },
  })
  const [status, setStatus] = useState<string>('')
  const [isError, setIsError] = useState<boolean>(false)

  const handleShopChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setShop({ ...(Shop as Shop), [name]: value })
    if (name === 'name' || name === 'email' || name === 'password') {
      setShop({
        ...(Shop as Shop),
        user: { ...(Shop as Shop).user, [name]: value },
      })
    }
  }
  const submit = async () => {
    const responseUser = await authFetch(`${SERVER_URL}/users/${id}`, {
      method: 'POST',
      body: JSON.stringify({
        name: Shop?.user.name,
        email: Shop?.user.email,
        password: Shop?.user.password,
        confirmPassword: Shop?.user.password,
      }),
    })
    const temp = await responseUser.json()
    const response = await authFetch(`${SERVER_URL}/shops/${id}`, {
      method: 'POST',
      body: JSON.stringify({
        id: temp.id,
        description: Shop?.description,
        googleMaps: Shop?.googleMaps,
        address: Shop?.address,
      }),
    })
    if (!responseUser.ok) {
      const data = await responseUser.json()
      setIsError(true)
      setStatus(data.message[0])

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
      setStatus(data.message[0])
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
          value={Shop?.user.name ?? ''}
        ></LabelTextInput>
        <LabelTextInput
          type={'email'}
          name={'email'}
          onChange={handleShopChange}
          value={Shop?.user.email ?? ''}
        ></LabelTextInput>
        <LabelTextInput
          type={'text'}
          name={'password'}
          onChange={handleShopChange}
          value={Shop?.user.password ?? ''}
        ></LabelTextInput>
        <LabelTextInput
          type={'text'}
          name={'title'}
          onChange={handleShopChange}
          value={Shop?.title ?? ''}
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
        <LabelTextInput
          type={'text'}
          name={'googleMaps'}
          onChange={handleShopChange}
          value={Shop?.googleMaps ?? ''}
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
