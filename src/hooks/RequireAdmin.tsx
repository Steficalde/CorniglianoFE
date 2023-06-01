import { useContext, useEffect } from 'react'
import AuthContext from '../components/auth/AuthContext'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { Auth } from '../types/auth'
import Home from '../pages/Home'

/**
 * Redirects the user to the login page if they are not logged in.
 */
const RequireAdmin = ({
  children,
}: {
  children: JSX.Element
}): JSX.Element  => {
  const { user }: Auth = useContext(AuthContext) as Auth

  if (!user) {
    return <Home />
  } else {
    return <>{children}</>
  }
}
export default RequireAdmin
