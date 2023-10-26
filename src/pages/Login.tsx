import TextInput from "../components/input/TextInput";
import React, { useContext, useRef, useState } from "react";
import { SERVER_URL } from "../costants";
import { Auth, Tokens, User } from "../types/auth";
import AuthContext from "../components/auth/AuthContext";
import { NavigateFunction, useNavigate } from "react-router-dom";

export default function Login(): JSX.Element {
  const emailRef: React.RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null)
  const passwordRef: React.RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null)
  const { setTokens, logout }: Auth = useContext(AuthContext) as Auth
  const [error, setError] = useState<string>('')

  let navigate: NavigateFunction = useNavigate()
  const submit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault()

    let payload: { password: string | undefined; email: string | undefined } = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    }

    try {
      const login: Response = await fetch(`${SERVER_URL}/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      if (login.ok) {
        const tokens: Tokens = await login.json()
        const newUser: User = await setTokens(tokens)
        if (newUser?.role !== 'admin') {
          logout()
          return navigate('/')
        }
        return navigate('/admin/users')
      } else if (login.status === 403) {
        setError('Email o password errati')
      } else {
        setError('Errore sconosciuto')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="container-xl grid place-items-center h-[100vh]">
        <div className="w-[450px] bg-white rounded-xl shadow-lg px-5 py-8">
          <form onSubmit={submit} className="flex flex-col gap-6">
            <h1 className="text-center">Login</h1>
            <div>
              <label className="text-sm text-red-700">{error}</label>
            </div>
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
            <div className="flex justify-center">
              <button type="submit" className="primary-button">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
