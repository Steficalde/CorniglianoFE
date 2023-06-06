
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TimeLine } from "../components/TimeLine";
import { motivations, steps } from "../costants";
import Hero from "../components/homeComponent/Hero";
import Features from "../components/homeComponent/Features";
import { About } from "../components/homeComponent/About";
import { animate } from "../functions";
import GuestLayout from "../layouts/GuestLayout";
import Ai from "../components/homeComponent/Ai";
import Footer from "../components/homeComponent/Footer";


export default function Contatti() {

  return (
    <GuestLayout>
         <div className=" w-full container-xl h-[75vh] pt-32">
          <h1>Contatti</h1>
           <p>Sviluppatori: </p>
           <p>Scuola Calvino: </p>
           <p>Scuola A.Volta: </p>
           <p>Per qualsiasi informazione o chiarimento, non esitare a contattarci!</p>
         </div>
    </GuestLayout>
  )
}
