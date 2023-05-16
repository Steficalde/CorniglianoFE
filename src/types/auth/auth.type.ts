import { Tokens } from "./tokens.type";

export type Auth = {
  user: User | null
  setTokens: (token: Tokens) => Promise<User>
  refresh: Function
  authFetch: Function
  logout: Function
}

export type User = {
  id: number
  name: string
  email: string
  avatar: string | null
  role?: string
  exp: number
}
