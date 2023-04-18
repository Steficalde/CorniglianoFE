export type Auth = {
  user: User
  setTokens: Function
  refresh: Function
  authFetch: Function
}

export type User = {
  id: number
  name: string
  email: string
  avatar: string
  role: string
  exp: number
}
