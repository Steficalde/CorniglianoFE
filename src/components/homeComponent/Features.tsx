import TypingText from "../text/TypingText";
import Coin from "../canvas/Coin";
import robot from "../../assets/images/r-l-1-happy.png";
import light from "../../assets/images/light-bulb.png";

export default function Features() {
  return (
    <div className="flex flex-col justify-center items-center px-3">
      <div className="w-full flex justify-center" id="j-2">
        <TypingText text={['rafforzare', 'riuniamo', 'riattiviamo']}></TypingText>
      </div>
      <div className="w-[800px] flex gap-12 justify-center max-xl:flex-col max-xl:w-[100%]">
        <div className="w-3/5 h-[650px] rounded-3xl bg-white flex justify-center  max-xl:w-[100%] max-xl:h-[600px]">
          <div className="flex flex-col items-center justify-start absolute gap-6 max-md:gap-0 ">
            <h2 className=" h-fit relative mt-10">Rafforziamo</h2>
            <div className="w-[300px] h-[300px]">
              <Coin></Coin>
            </div>
            <p className=" w-3/4 text-center">
              Attraverso questa moneta <b>riattiviamo</b> l'economia locale
            </p>
          </div>
        </div>
        <div className="w-2/5 flex  flex-col justify-between gap-12 max-xl:w-[100%]">
          <div className="flex flex-col items-center justify-center gap-5 h-[300px] relative bg-white shadow-lg rounded-3xl relative overflow-hidden image-container-right flex justify-center max-xl:h-[400px] max-xl:w-[100%]">
            <h2 className="text-black font-bold ">Riuniamo</h2>
            <img src={light} width={150} alt="" />
          </div>
          <div className="flex flex-col items-center justify-center  gap-5 h-[300px] relative bg-white rounded-3xl  max-xl:h-[400px] max-xl:w-[100%]">
            {/*<h2>Riattiviamo</h2>*/}
            <img src={robot} width={300} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
