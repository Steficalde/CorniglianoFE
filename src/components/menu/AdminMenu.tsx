import { Spin as Hamburger } from "hamburger-react";
import { useContext, useState } from "react";
import MobileMenu from "./MobileMenu";
import logo from "../../assets/images/hugstore-logo.png";
import defaultAvatar from "../../assets/images/default-colored-avatar.png";
import { ADMIN_MENU } from "../../costants";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import AuthContext from "../auth/AuthContext";
import { Auth } from "../../types/auth";

export default function Menu(): JSX.Element {
  const [isOpen, setOpen] = useState(false)
  const { user, logout } = useContext(AuthContext) as Auth
  const navigate: NavigateFunction = useNavigate()
  function handleMenu(): void {
    setOpen(!isOpen)
  }

  return (
    <nav>
      <div className="w-full h-[80px] z-20 absolute max-md:hidden inset-0 flex justify-between items-center container-xl">
        <div className="flex items-center gap-12 ">
          <Link to={'/'} className="text-bold text-[28px] font-bold ">
            <img src={logo} alt="Logo" className="w-[50px]"></img>
          </Link>
          <div className="flex gap-6 items-center">
            {(Object.keys(ADMIN_MENU) as Array<keyof typeof ADMIN_MENU>).map(
              (item, index) => (
                <Link to={ADMIN_MENU[item]} key={index}>
                  {item.replace(/_/g, ' ')}
                </Link>
              ),
            )}
            <button
              onClick={(): void => {
                logout()
                navigate('/login')
              }}
            >
              Logout
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {user?.name}
          {user?.avatar ? (
            <div className="rounded-full shadow-md">
              <img
                src={user.avatar}
                alt="Avatar"
                className="w-[36px] m-[7px]"
              ></img>
            </div>
          ) : (
            <div className="rounded-full bg-blue-200 shadow-md overflow-hidden">
              <img
                src={defaultAvatar}
                alt="Avatar"
                className="w-[50px] relative top-[4px]"
              ></img>
            </div>
          )}
        </div>
      </div>
      <div className="md:hidden">
        <div className="absolute top-2 left-2 z-20">
          <Hamburger toggled={isOpen} toggle={handleMenu} />
        </div>
        <MobileMenu
          isOpen={isOpen}
          handleMenu={handleMenu}
          className="flex flex-col gap-4 "
        >
          {(Object.keys(ADMIN_MENU) as Array<keyof typeof ADMIN_MENU>).map(
            (item, index) => (
              <Link to={ADMIN_MENU[item]} key={index}>
                {item.replace(/_/g, ' ')}
              </Link>
            ),
          )}
          <button
            onClick={() => {
              logout()
              navigate('/login')
            }}
          >
            Logout
          </button>
        </MobileMenu>
      </div>
    </nav>
  )
}
