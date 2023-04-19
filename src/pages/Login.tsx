import TextInput from '../components/input/TextInput'
import React, { useContext, useRef } from 'react'
import { SERVER_URL } from '../costants'
import { Tokens } from '../types/auth'
import AuthContext from '../components/auth/AuthContext'
import { redirect } from 'react-router-dom'
import AdminLayout from '../layouts/AdminLayout'
import GuestLayout from "../layouts/GuestLayout";
  import { useNavigate } from "react-router-dom";
export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const { setTokens } = useContext(AuthContext)


let navigate = useNavigate();
  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    let payload = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    }
    const login: Response = await fetch(`${SERVER_URL}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    if (!login.ok) {
      throw new Error(`Errore durante la richiesta: ${login.status} - ${login.statusText}`)
    }
    const tokens: Tokens = await login.json()
    setTokens(tokens)
    return navigate('/shops')
  }

  return (
    <GuestLayout>
      <div className="container-xl grid place-items-center h-[100vh]">
        <div className="w-[450px] bg-white rounded-xl shadow-lg px-5 py-8">
          <form onSubmit={submit} className="flex flex-col gap-6">
            <h1 className="text-center">Login</h1>
            <div className="flex flex-col gap-2">
              <label className="text-sm">Email</label>
              <TextInput
                type="email"
                name="email"
                className="duration-200 focus:translate-y-1 relative"
                autoComplete="email"
                ref={emailRef}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm">Password</label>
              <TextInput
                type="password"
                name="password"
                className="duration-200  focus:translate-y-1 relative"
                autoComplete="current-password"
                ref={passwordRef}
              />
            </div>
            <button type="submit" className="">
              Login
            </button>
          </form>
        </div>
      </div>
    </GuestLayout>
  )
}
