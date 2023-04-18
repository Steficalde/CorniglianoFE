import React, { useEffect, useState } from 'react'
import send from '../../assets/images/send.png'
import Message from './Message'
import {SERVER_URL} from "../../costants";
import axios from "axios";

export default function MessagesContainer() {
  const input = window.document.querySelector('#get_message')
  //true se l'emittente è l'utente
  let issuer = true
  const [messages, setMessages] = useState([
    "ciao, sono un robot molto giovane e ancora tanto da imparare, ma credo di poterti essere d'aiuto",
  ])
  async function chat() {

    // @ts-ignore
    const message = input.value
    try {
      let form = new FormData()
      form.append('message', message)
      const res: any = await fetch(`${SERVER_URL}/chat`, {method: 'POST', body: form, cache: 'no-store'})
      const data = await res.text()
      setMessages((messages) => [ ...messages,message,data ])
      // @ts-ignore
      input.value = ''
    }catch(e:any){
      console.log(e.error)
      setMessages((messages) => [ ...messages,message,"problema di connessione, riprovare" ])
    }
  }
  useEffect(()=>{
    const messagesContainer=window.document.getElementById("container-messages");
    // @ts-ignore
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  },[messages])
  return (
    <div
      id="container-chat"
      className="bg-gray-200  w-[350px] h-[500px] flex flex-col	justify-between rounded-xl shadow-lg overflow-hidden"
    >
      <div id="container-messages" className="overflow-auto flex flex-col mt-3 p-2">
        {
            messages.map((message, index) => {
              issuer = !issuer
              return <Message message={message} key={index} issuer={issuer} ></Message>
            })
        }
      </div>
      <div id="container-sender" className=" h-[60px] w-full flex justify-center items-center">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            chat()
          }}
          className="flex gap-2  w-full h-[40px] items-center justify-center"
        >
          <textarea

            id="get_message"
            className=" rounded-full pt-2 w-full ml-2 resize-none outline-none h-full  bg-white text-black pl-4 "
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                // @ts-ignore
                if (input.value.length === 0) return
                chat()
              } else if (e.key === ' ') {
                // @ts-ignore
                input.value += ' '
              }
            }}
            autoComplete="off"
          />
          <button
            type="submit"
            value="enter"
            className="w-fit aspect-square rounded-full p-2 mr-2 bg-my-dark-blue"
          >
            <img src={send} width={20} height={20} alt="enter" />
          </button>
        </form>
      </div>
    </div>
  )
}
