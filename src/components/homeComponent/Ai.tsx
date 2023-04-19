import botHappy from "../../assets/images/r-l-1-happy.png"
import bot from "../../assets/images/r-l-1.png"
export default function Ai(){
    return(
        <div className="container-xl flex flex-col justify-center items-center">
            <h1>Un piccolo assistente per aiutarti</h1>
            <p>Lorem zo</p>
            <div className="flex items-center justify-center gap-12">
                <div>
                    <img src={bot} width={500} alt=""/>
                </div>
                <div className="w-full flex flex-col gap-3 bg-white shadow-lg rounded-xl p-5">
                    <h2>Risponde alle tue domande</h2>
                    <hr className="border-2 border-my-blue float-l w-1/2 "/>
                    <p>
                        I ragazzi dell' Isituto Tecnico Calvino di Sestri Ponente hanno sviluppato un robottino che è in grado di rispondere a domande ruguardanti l'applicazione ed il progetto
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center gap-12">
                <div className="w-full flex flex-col gap-3 bg-white shadow-lg rounded-xl p-5">
                    <h2>un bot felice</h2>
                    <hr className="border-2 border-my-blue float-l w-1/2 "/>
                    <p>
                        Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem loremLorem lorem Lorem lorem Lorem lorem
                    </p>
                </div>
                <div>
                    <img src={botHappy} width={500} alt=""/>
                </div>
            </div>
        </div>
    )
}