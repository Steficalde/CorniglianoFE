import { useParams } from 'react-router-dom'
import AdminLayout from '../../../layouts/AdminLayout'
import { Award } from './award.type'
import React, { useContext, useEffect, useState } from 'react'
import { SERVER_URL } from '../../../costants'
import { Auth } from '../../../types/auth'
import AuthContext from '../../../components/auth/AuthContext'
import LabelTextInput from '../../../components/input/LabelTextInput'



const AwardPage = () => {
  const { id } = useParams<{ id: string }>()
  const { authFetch } = useContext(AuthContext) as Auth
  const [award, setAward] = useState<Award | null>(null)
  const [status, setStatus] = useState<string>('')
  const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    const fetchAward = async () => {
      const response = await authFetch(`${SERVER_URL}/awards/${id}`)
      const data = await response.json()
      setAward(data)
    }
    fetchAward().catch(console.error)
  }, [])

  const handleAwardChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setAward({ ...(award as Award), [name]: value })
  }
  const submit = async () => {
    const response = await authFetch(`${SERVER_URL}/awards/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        title: award?.title,
        description: award?.description,
        cost: award?.cost,
        quantity: award?.quantity,
      }),
    })
    if (!response.ok) {
      const data = await response.json()
      setIsError(true)
      setStatus(data.message[0])
    } else {
      setIsError(false)
      setStatus('Modifica avvenuta con successo!')
      setTimeout(() => {
        setStatus('')
      }, 3000)
    }
  }
  return (
    <AdminLayout>
      <h1>Premio {award?.id}</h1>
      <section className={'max-w-[600px] flex flex-col gap-4 mt-10'}>
        <LabelTextInput
          type={'text'}
          name={'title'}
          onChange={handleAwardChange}
          value={award?.title ?? ''}
        ></LabelTextInput>
        <LabelTextInput
          type={'text'}
          name={'description'}
          onChange={handleAwardChange}
          value={award?.description ?? ''}
        ></LabelTextInput>
        <LabelTextInput
          type={'text'}
          name={'quantity'}
          onChange={handleAwardChange}
          value={award?.quantity ?? ''}
        ></LabelTextInput>
        <LabelTextInput
          type={'text'}
          name={'cost'}
          onChange={handleAwardChange}
          value={award?.cost ?? ''}
        ></LabelTextInput>
        <div className={`${isError ? 'text-red-700' : ''}`}>
          {status.slice(0, 1).toUpperCase() + status.slice(1)}
        </div>
        <div className="flex justify-end">
          <button onClick={submit} className="primary-button">
            Salva
          </button>
        </div>
      </section>
    </AdminLayout>
  )
}
export default AwardPage
