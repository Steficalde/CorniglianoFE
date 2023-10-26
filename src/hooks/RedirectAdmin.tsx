import { useContext } from "react";

import AuthContext from "../components/auth/AuthContext";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Auth } from "../types/auth";
import Admin from "../pages/admin/AdminUsers";

/**
 * Redirects the user to the admin page if they are logged in.
 */
export const RedirectAdmin = ({
  children,
}: {
  children: JSX.Element
}): JSX.Element => {
  const { user }: Auth = useContext(AuthContext) as Auth
  const navigate: NavigateFunction = useNavigate()

  if (user) {
    return <Admin />
  } else {
    return <>{children}</>
  }
}

export default RedirectAdmin
