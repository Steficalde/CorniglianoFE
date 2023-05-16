import { useContext, useEffect } from "react";

import AuthContext from "../components/auth/AuthContext";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Auth } from "../types/auth";

/**
 * Redirects the user to the admin page if they are logged in.
 */
export const useRedirectAdmin = (): void => {
  const { user }: Auth = useContext(AuthContext) as Auth
  const navigate: NavigateFunction = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/admin')
    }
  }, [user])
}
