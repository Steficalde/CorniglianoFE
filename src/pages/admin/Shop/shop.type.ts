export type ShopType = {
  id: number
  address: string
  description: string
  user: {
    name: string
    email: string
    avatar: string
    password?: string
  }
}
