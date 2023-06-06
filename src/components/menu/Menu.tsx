import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import logo from "../../assets/images/hugstore-logo.png";
import apple from "../../assets/images/app-store.png";
import google from "../../assets/images/google-play.png";
import { APPLE_APP_URL, GOOGLE_APP_URL, MENU } from "../../costants";
import TextIconButton from "../button/TextIconButton";
import { Link } from "react-router-dom";

export default function Menu() {
  const [isOpen, setOpen] = useState(false)

  function handleMenu() {
    setOpen(!isOpen)
  }

  return (
    <nav>
      <div className="w-full h-[80px] z-50 absolute max-sm:hidden inset-0 flex justify-between items-center container-xl">
        <div className="flex items-center gap-12 ">
          <Link to={'/'} className="text-bold text-[28px] font-bold ">
            <img src={logo} alt="Logo" className="w-[50px]"></img>
          </Link>
          <div className="flex gap-6 items-center">
            {(Object.keys(MENU) as Array<keyof typeof MENU>).map(
              (item, index) => (
                <Link to={MENU[item]} key={index}>
                  {item.replace(/_/g, ' ')}
                </Link>
              ),
            )}
          </div>
        </div>
        <div className="flex gap-10">
          <a href={APPLE_APP_URL} target="_blank">
            <TextIconButton text="Apple Store" icon={apple} />
          </a>
          <a href={GOOGLE_APP_URL} target="_blank">
            <TextIconButton text="Google Play" icon={google}></TextIconButton>
          </a>
        </div>
      </div>
      <div className="sm:hidden">
        <div className="absolute w-full inset-0">
          <Hamburger toggled={isOpen} toggle={handleMenu} />
        </div>
        <MobileMenu isOpen={isOpen} handleMenu={handleMenu}>
          <p>ciao</p>
        </MobileMenu>
      </div>
    </nav>
  )
}
