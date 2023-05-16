import EarthCanvas from "../canvas/Earth";
import ArrowLink from "../button/ArrowLink";
import { handleScrollClick } from "../../costants";

export default function Hero() {
  return (
    <div
      className="flex flex-col items-center "
      style={{
        background:
          'linear-gradient(20deg, rgba(255,255,255,0.028448879551820738) 51%, rgba(111,111,247,0.4962359943977591) 100%)',
      }}
    >
      <div className="hero w-full h-[75vh] flex justify-center items-center max-md:flex-col container-xl ">
        <div className="w-1/2 justify-center items-center max-md:w-full max-md:mt-[60px]">
          <h1 className="text-left w-3/4 max-md:w-full max-md:mt-10 max-md:text-center max-md:px-1">
            LA <b className="text-my-blue ">FORZA</b> DELL'UNIONE DI CORNIGLIANO
          </h1>
        </div>
        <div className="w-1/2 flex justify-center h-full items-center max-md:w-full max-md:h-[50vh]">
          <EarthCanvas />
        </div>
      </div>
      <div onClick={() => handleScrollClick('j-1')}>
        <ArrowLink dark={true}></ArrowLink>
      </div>
    </div>
  )
}
