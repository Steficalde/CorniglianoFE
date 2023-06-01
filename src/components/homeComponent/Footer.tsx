export default function Footer() {
  return (
    <div className="w-full flex-col p-5 py-10 border-t-2 border-gray-300 max-md:mt-10">
      <p className="text-[13px] ">
        Designed by Diego Signorastri & Stefano Calderaro, students of{' '}
        <a
          href="https://calvino.edu.it/"
          className="text-blue-700 hover:underline"
        >
          I.T.S Italo Calvino
        </a>
      </p>
      <p className="text-[13px] ">
        Ideato dai ragazzi della scuola{' '}
        <a
          href="https://www.iccornigliano.edu.it/pagine/alessandro-volta"
          className="text-blue-700 hover:underline"
        >
          A.Volta di Genova Cornigliano
        </a>
      </p>
      <p className="text-[13px] ">
        Reso possibile da{' '}
        <a
          href="https://www.sapereconsumare.it/"
          className="text-blue-700 hover:underline"
        >
          saper consumare
        </a>
      </p>
      <p className="text-[13px] ">
        Powered by{' '}
        <a
          href="https://www.civcornigliano.com/"
          className="text-blue-700 hover:underline"
        >
          CIV Corgnigliano
        </a>
      </p>
      <p className="text-[13px] ">
        <button
          onClick={() => window.open('/privacy')}
          className="text-blue-700 hover:underline"
        >
          Privacy Policy
        </button>
      </p>
    </div>
  )
}
