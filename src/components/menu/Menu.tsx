


import { Spin as Hamburger } from 'hamburger-react'
import { useEffect, useState } from 'react'
import MobileMenu from './MobileMenu'
import logo from '../../assets/images/hugstore-logo.png'
import apple from '../../assets/images/app-store.png'
import google from '../../assets/images/google-play.png'
import { APP_URL, MENU } from '../../costants'
import { gsap, Power3 } from 'gsap'
import TextIconButton from '../button/TextIconButton'
import { Link } from 'react-router-dom'
export default function Menu() {
  const [isOpen, setOpen] = useState(false)

  function handleMenu() {
    setOpen(!isOpen)
  }


  // @ts-ignore
  return (
    <nav className="container-xl bg-transparent opacity-100 w-full ">
      <div className="flex justify-between items-center w-[1080px] max-lg:w-full max-lg:pr-5 z-50 absolute max-sm:hidden h-[80px] ">
        <div className="flex items-center gap-12 ">
          <Link to={'/'} className="text-bold text-[28px] font-bold ">
            <img src={logo} alt="Logo" className="w-[50px]"></img>
          </Link>
          <div className="flex gap-6 items-center">
            {(Object.keys(MENU) as Array<keyof typeof MENU>).map((item, index) => (
              <Link to={MENU[item]} key={index}>
                {item.replace(/_/g, ' ')}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex gap-10">
          <a href={APP_URL} target="_blank">
            {/*@ts-ignore*/}
            <TextIconButton text="Apple Store" icon={apple}/>
          </a>
          <a href={APP_URL} target="_blank">
            {/*@ts-ignore*/}
            <TextIconButton text="Google Play" icon={google}></TextIconButton>
          </a>
        </div>
      </div>
      <div className="sm:hidden">
        <div className='absolute w-full'>  <Hamburger toggled={isOpen} toggle={handleMenu} />
        </div>
        <MobileMenu isOpen={isOpen} handleMenu={handleMenu}>
          {' '}
          <p>ciao</p>
        </MobileMenu>
      </div>
    </nav>
  )
}
