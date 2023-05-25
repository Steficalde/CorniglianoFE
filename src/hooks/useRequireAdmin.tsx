import { useContext, useEffect } from 'react'
import AuthContext from '../components/auth/AuthContext'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { Auth } from '../types/auth'

/**
 * Redirects the user to the login page if they are not logged in.
 */
export const useRequireAdmin = (): void => {
  const { user }: Auth = useContext(AuthContext) as Auth
  const navigate: NavigateFunction = useNavigate()

  useEffect((): void => {
    if (!user) {
      navigate('/login')
    }
  }, [user])
}
