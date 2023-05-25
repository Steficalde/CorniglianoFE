import React, { createContext, useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import { SERVER_URL } from '../../costants'
import { Auth, JwtPayload, Tokens, User } from '../../types/auth'

type UserInfo = Pick<User, 'name' | 'email' | 'avatar'>

const AuthContext: React.Context<Auth | null> = createContext<Auth | null>(null)

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  // state to store the user data
  const [user, setUser] = useState<User | null>(null)

  // utility functions
  // if there is a token in local storage, return it otherwise return null
  const getAccessToken = (): string | null => {
    return localStorage.getItem('accessToken')
      ? JSON.parse(localStorage.getItem('accessToken') as string)
      : null
  }
  // if there is a token in local storage, return it and decode it otherwise return null
  const getDecodedAccessToken = (): JwtPayload | null => {
    const accessToken: string | null = getAccessToken()
    return accessToken ? jwt_decode(accessToken) : null
  }

  // if there is a refresh token in local storage, return it otherwise return null
  const getRefreshToken = (): string | null => {
    return localStorage.getItem('refreshToken')
      ? JSON.parse(localStorage.getItem('refreshToken') as string)
      : null
  }

  /**
   * Fetch with auth header and refresh token if needed
   */
  const authFetch = async (
    url: string,
    options: RequestInit = {},
    retry: boolean = true,
  ): Promise<any> => {
    //take the access token from local storage with the getAccessToken function
    const accessToken: string | null = getAccessToken()
    //if there is no access token, throw an error
    if (!accessToken) {
      throw new Error('Nessun token di accesso')
    }

    const headers: { Authorization: string; 'Content-Type': string } = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    }

    //fetch the url with the options and the headers
    const res: Response = await fetch(url, { ...options, headers })

    //if the response status is 401 (unauthorized) and retry is true, try to refresh the token
    // if retry is false and the response in not ok, throw an error
    if (res.status === 401 && retry) {
      //update the  token in local storage with the refresh function
      await refresh()
      //after the refresh, call the function again with the same parameters but
      //with retry set to false in order to prevent infinite loop
      //function now has the new access token
      return authFetch(url, options, false)
    } else if (!res.ok) {
      //if the response is not ok, throw an error
      throw new Error(
        `Errore durante la richiesta: ${res.status} - ${res.statusText}`,
      )
    }
    return res.json()
  }
  // get the user data from the server and return it
  const getUser = async (id: number): Promise<UserInfo> => {
    const res: UserInfo = await authFetch(`${SERVER_URL}/users/${id}`, {
      method: 'GET',
    })
    return { name: res.name, email: res.email, avatar: res?.avatar }
  }

  useEffect((): void => {
    const fetchUser = async () => {
      // check if there is a token in local storage and decode it
      const accessToken: JwtPayload | null = getDecodedAccessToken()
      if (accessToken) {
        const userInfo: UserInfo = await getUser(accessToken.sub)
        setUser({
          id: accessToken.sub,
          role: accessToken.role,
          exp: accessToken.exp,
          ...userInfo,
        })
      }
    }
    fetchUser().catch((err): void => {
      console.log(err)
    })
  }, [])

  // function to save the tokens in local storage
  const setTokens = async (tokens: Tokens): Promise<User> => {
    localStorage.setItem('accessToken', JSON.stringify(tokens.accessToken))
    localStorage.setItem('refreshToken', JSON.stringify(tokens.refreshToken))

    const accessToken: JwtPayload = jwt_decode(tokens.accessToken)

    const userInfo: UserInfo = await getUser(accessToken.sub)
    const newUser: User = {
      id: accessToken.sub,
      role: accessToken.role,
      exp: accessToken.exp,
      ...userInfo,
    }
    setUser(newUser)
    return newUser
  }
  // function to refresh the token when it expires
  async function refresh(): Promise<void> {
    //fetch the refresh token endpoint with the refresh token in the authorization header
    const refreshToken: string | null = getRefreshToken()
    if (!refreshToken) {
      logout()
      throw new Error('Nessun token di refresh')
    }
    const apiResponse: Response = await fetch(`${SERVER_URL}/auth/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${refreshToken}`,
      },
    })
    //if the response is not ok, throw an error
    if (!apiResponse.ok) {
      logout()
      throw new Error(
        `Errore durante il refresh token: ${apiResponse.status} - ${apiResponse.statusText}`,
      )
    }

    //if the response is ok, take the tokens from the response
    const tokens: Tokens = await apiResponse.json()
    //save the tokens in local storage
    await setTokens(tokens)
  }

  const logout = (): void => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setUser(null)
  }
  return (
    <AuthContext.Provider
      value={{ user, setTokens, refresh, authFetch, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
