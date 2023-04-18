
import { createContext, useState } from 'react'
import jwt_decode from 'jwt-decode'
import { SERVER_URL } from '../../costants'
import { Tokens, Auth, JwtPayload, User } from '../../types/auth'

// @ts-ignore
const AuthContext = createContext<Auth>()

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  // utility functions
  // if there is a token in local storage, return it otherwise return null
  const getAccessToken = (): string | null => {
    if (localStorage.getItem('accessToken')) {
      try {
        // @ts-ignore
        return JSON.parse(localStorage.getItem('accessToken'))
      } catch (e) {
        console.error(e)
      }
    }
    return null
  }
  // if there is a token in local storage, return it and decode it otherwise return null
  const getDecodedAccessToken = (): JwtPayload | null => {
    const accessToken: string | null = getAccessToken()
    if (accessToken) {
      return jwt_decode(accessToken)
    }
    return null
  }
  // if there is a token in local storage, return it otherwise return null
  const getRefreshToken = (): string | null => {
    try {
      // @ts-ignore
      return JSON.parse(localStorage.getItem('refreshToken'))
    } catch (e) {
      console.error(e)
    }
    return null
  }

  /**
   * Fetch with auth header and refresh token if needed
   * @param url
   * @param options
   * @param retry used to prevent infinite loop, only the first call should be true
   */
  const authFetch = async (url: string, options: RequestInit = {}, retry: boolean = true): Promise<any> => {
    //take the access token from local storage with the getAccessToken function
    // @ts-ignore
    const accessToken: string = getAccessToken()
    //if there is no access token, throw an error
    if (!accessToken) {
      throw new Error('Nessun token di accesso')
    }
    //create the headers object with the content type and the authorization header with the access token
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    }
    //fetch the url with the options and the headers
    const res = await fetch(url, { ...options, headers })

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
      throw new Error(`Errore durante la richiesta: ${res.status} - ${res.statusText}`)
    }
    return res
  }
  // get the user data from the server and return it
  const getUser = async (id: number): Promise<{ name: string; email: string; avatar: string }> => {
    const data: User = await authFetch(`${SERVER_URL}/users/${id}`, {
      method: 'GET',
    })
    return { name: data.name, email: data.email, avatar: data.avatar }
  }

  // state to store the user data
  const [user, setUser] = useState(() => {
    // check if there is a token in local storage and decode it
    const accessToken: JwtPayload | null = getDecodedAccessToken()
    // if there is a token, return the user data, otherwise return null
    return accessToken
      ? { id: accessToken.sub, role: accessToken.role, exp: accessToken.exp, ...getUser(accessToken.sub) }
      : null
  })

  // function to save the tokens in local storage
  const setTokens = (tokens: Tokens) => {
    localStorage.setItem('accessToken', JSON.stringify(tokens.accessToken))
    localStorage.setItem('refreshToken', JSON.stringify(tokens.refreshToken))
    // if there is no user, decode the access token and set the user data
    if (user === null) {
      const accessToken: JwtPayload = jwt_decode(tokens.accessToken)
      setUser({ id: accessToken.sub, role: accessToken.role, exp: accessToken.exp, ...getUser(accessToken.sub) })
    }
  }
  // function to refresh the token when it expires
  async function refresh() {
    //fetch the refresh token endpoint with the refresh token in the authorization header
    const apiResponse: Response = await fetch(`${SERVER_URL}/auth/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getRefreshToken()}`,
      },
    })
    //if the response is not ok, throw an error
    if (!apiResponse.ok) {
      throw new Error(`Errore durante il refresh token: ${apiResponse.status} - ${apiResponse.statusText}`)
    }
    //if the response is ok, take the tokens from the response
    const tokens: Tokens = await apiResponse.json()
    //save the tokens in local storage
    setTokens(tokens)
  }
  // @ts-ignore
  return <AuthContext.Provider value={{ user, setTokens, refresh, authFetch }}>{children}</AuthContext.Provider>
}

export default AuthContext
