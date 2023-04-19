import { useContext, useEffect } from 'react'

import AuthContext from '../components/auth/AuthContext'
import { redirect, useNavigate } from 'react-router-dom'

export const useRequireAdmin = () => {
  const { user, refresh } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
    // second after the unix epoch
    if (user?.exp < Date.now() / 1000) {
      refresh()
    }
    if (user?.role !== 'admin') {
      navigate('/')
    }
  }, [])
}
