
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
import Ai from "../components/homeComponent/Ai";
import Footer from "../components/homeComponent/Footer";

gsap.registerPlugin(ScrollTrigger)
export default function Home() {
  window.onbeforeunload = () => window.scrollTo(0, 0)
  //useEffect(() => animate())
  window.addEventListener('scroll', () => {
    let element = document.querySelector('#AI_titile');
    let bounding = element?.getBoundingClientRect();
    if(bounding && element){
      // Controlla se l'elemento è visibile nello schermo
      if (
          bounding.top >= 0 &&
          bounding.left >= 0 &&
          bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
      ) {
        window.document.querySelector("#chat")?.classList.add("animate-bounce")
      } else {
        window.document.querySelector("#chat")?.classList.remove("animate-bounce")
      }
    }

  });
    return (
    <GuestLayout>
      <Hero></Hero>
      <About></About>
      <TimeLine experiences={steps} title={"come si usa l'applicazione?"}></TimeLine>
        {/*<Features></Features>*/}
      <TimeLine experiences={motivations} title="perché scegliere questa app?" idTl={'j-3'}></TimeLine>
      <Ai></Ai>
      <Footer></Footer>
    </GuestLayout>
  )
}
