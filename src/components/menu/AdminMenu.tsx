

import { Link } from 'react-router-dom'
import { Spin as Hamburger } from 'hamburger-react'
import { useContext, useState } from 'react'
import MobileMenu from './MobileMenu'
import logo from '../../assets/static/images/hugstore-logo.png'
import {ADMIN_MENU, MENU} from '../../costants'
import {useRequireAdmin} from "../../hooks/useRequireAdmin";

export default function AdminMenu() {
  const [isOpen, setOpen] = useState(false)
  useRequireAdmin()

  function handleMenu() {
    setOpen(!isOpen)
  }

  return (
    <nav className="container-xl opacity-100" id="menu">
      <div className="flex justify-between items-center max-sm:hidden h-[80px] ">
        <div className="flex items-center gap-12 ">
          <Link to={'/'} className="text-bold text-[28px] font-bold ">
            <img src={logo} alt="Logo" className="w-[50px]"></img>
          </Link>
          <div className="flex gap-6 items-center">
            {(Object.keys(ADMIN_MENU) as Array<keyof typeof ADMIN_MENU>).map((item, index) => (
              <Link  key={index} to={ADMIN_MENU[item]}>
                {item.replace(/_/g, ' ')}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="sm:hidden h-[80px] flex justify-between items-center">
        <Hamburger toggled={isOpen} toggle={handleMenu} />
        <MobileMenu isOpen={isOpen} handleMenu={handleMenu}>
          {' '}
          <p>ciao</p>
        </MobileMenu>
      </div>
    </nav>
  )
}
