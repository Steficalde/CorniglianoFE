export const About = () => {
  return (
    <div className="w-full flex justify-center" id="j-1">
      <div className="flex w-[800px] max-md:w-full flex-col justify-center items-center p-5 gap-5">
        <h1 className=" text-center">Di cosa si tratta?</h1>
        <div
          className="flex flex-col justify-center bg-white p-10 rounded-xl gap-5"
          style={{
            boxShadow: '0 0 7px 1px #002EB033',
          }}
        >
          <li>
            È un'applicazione sviluppata dalle scuole{' '}
            <b className="text-my-blue">Alessandro Volta</b> di Cornigliano e{' '}
            <b className="text-my-blue">Italo Calvino</b> di Sestri Ponente
          </li>
          <li>
            Lo scopo dell'iniziativa è di{' '}
            <b className="text-my-blue">riattivare</b> l'economia locale di
            Cornigliano
          </li>
          <li>
            Attraverso l'applicazione, facendo acquisti nei negozi di
            Cornigliano, potrai ricevere{' '}
            <b className="text-my-blue">gratuitamente</b> dei premi
          </li>
        </div>
      </div>
    </div>
  )
}
