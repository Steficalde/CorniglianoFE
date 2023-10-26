import React, { useEffect, useRef } from "react";

export default function TypingText({ text = [''] }) {
  const ref = useRef()

  useEffect(() => {
    const textLoad = () => {
      for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
          if (ref.current) {
            ref.current.innerHTML = text[i]
          }
        }, i * 4000)
      }
    }

    textLoad()
    const interval = setInterval(textLoad, text.length * 4000)

    // Pulizia dell'intervallo e dei timer al momento della disattivazione del componente
    return () => {
      clearInterval(interval)
      for (let i = 0; i < text.length; i++) {
        clearTimeout(i * 4000)
      }
    }
  }, [text])

  return (
    <div className="text-container w-fit overflow-hidden py-10">
      <h1
        id="text-typed"
        ref={ref}
        className="relative  font-bold  text-center "
        style={{}}
      />
    </div>
  )
}
