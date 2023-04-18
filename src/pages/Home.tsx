'use client'
import { useContext, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TimeLine } from '../components/TimeLine'
import { motivations, steps } from '../costants'
import Hero from '../components/homeComponent/Hero'
import Features from '../components/homeComponent/Features'
import { About } from '../components/homeComponent/About'
import { animate } from '../functions'
import AuthContext from '../components/auth/AuthContext'
import GuestLayout from '../layouts/GuestLayout'

gsap.registerPlugin(ScrollTrigger)
export default function Home() {
  window.onbeforeunload = () => window.scrollTo(0, 0)
  useEffect(() => animate())

  return (
    <GuestLayout>
      <Hero></Hero>
      <About></About>
      <TimeLine experiences={steps} title={"come si usa l'applicazione?"}></TimeLine>
      <Features></Features>
      <TimeLine experiences={motivations} title="perché scegliere questa app?" idTl={'j-3'}></TimeLine>
    </GuestLayout>
  )
}
