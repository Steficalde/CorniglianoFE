import { useContext } from 'react'

import AuthContext from '@/src/components/auth/AuthContext'
import { useRouter } from 'next/navigation'

export const useRequireAdmin = () => {
  const router = useRouter()
  const { user, refresh } = useContext(AuthContext)

  if (!user) {
    router.push('/login')
  }
  // second after the unix epoch
  if (user?.exp < Date.now() / 1000) {
    refresh()
  }
  if (user?.role !== 'admin') {
    router.push('/')
  }
}
