import botHappy from "../../assets/images/r-l-1-happy.png"
import bot from "../../assets/images/r-l-1.png"
export default function Ai(){
    return(
        <div className="container-xl flex flex-col justify-center items-center" id="AI">
            <h1 className="max-md:hidden">Un piccolo assistente per aiutarti</h1>
            <p className="max-md:hidden">intelligence chat</p>
            <div className="flex items-center justify-center gap-12 max-md:flex-col-reverse">
                <div>
                    <img src={bot} width={500} alt="" className="max-md:w-[150px]"/>
                </div>
                <div className="w-full flex flex-col gap-3 bg-white shadow-lg rounded-xl p-5 " id="AI_titile">
                    <h2 className="max-md:text-center max-md:hidden">Risponde alle tue domande</h2>
                    <h2 className="max-md:text-center md:hidden">Una chat per aiutarti</h2>
                    <div className="w-full flex max-md:justify-center">
                        <hr className="border-[1px] border-my-blue float-l w-1/2 "/>
                    </div>
                    <p className="max-md:text-center">
                        I ragazzi dell' Isituto Tecnico Calvino di Sestri Ponente hanno sviluppato un robottino che è in grado di rispondere a domande ruguardanti l'applicazione ed il progetto
                    </p>
                </div>
            </div>

        </div>
    )
}