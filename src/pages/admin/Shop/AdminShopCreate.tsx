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
  const [Shop, setShop] = useState<any | null>({
    name: '',
    email: '',
    password: '',
    avatar: '',
    description: '',
    address: '',
    isActive: true,
  })
  const [status, setStatus] = useState<string>('')
  const [isError, setIsError] = useState<boolean>(false)

  const handleShopChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setShop({ ...Shop, [name]: value })
  }
  const submit = async () => {
    const response = await authFetch(`${SERVER_URL}/shops`, {
      method: 'POST',
      body: JSON.stringify({
        name: Shop?.name,
        email: Shop?.email,
        address: Shop?.address,
        password: Shop?.password,
        passwordConfirm: Shop?.password,
        description: Shop?.description,
        avatar: Shop?.avatar,
        isActive: Shop?.isActive,
      }),
    })

    if (!response.ok) {
      const data = await response.json()
      setIsError(true)
      setStatus(data.message.isArray ? data.message.join(' ') : data.message)
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
          value={Shop?.name ?? ''}
        ></LabelTextInput>
        <LabelTextInput
          type={'email'}
          name={'email'}
          onChange={handleShopChange}
          value={Shop?.email ?? ''}
        ></LabelTextInput>
        <LabelTextInput
          type={'text'}
          name={'password'}
          onChange={handleShopChange}
          value={Shop?.password ?? ''}
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


        <div className={`${isError ? 'text-red-700' : ''}`}>{status}</div>
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
