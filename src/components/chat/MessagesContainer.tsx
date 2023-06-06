import React, { useEffect, useState } from 'react'
import send from '../../assets/images/send.png'
import Message from './Message'
import { ThreeDots } from 'react-loader-spinner'

export default function MessagesContainer() {
  const input = window.document.querySelector('#get_message')
  let issuer = true
  const [messages, setMessages] = useState([
    "ciao, sono un robot molto giovane e ancora tanto da imparare, ma credo di poterti essere d'aiuto",
  ])

  const [isLoading, setIsLoading] = useState(false)

  async function chat() {
    setIsLoading(true)
    // @ts-ignore
    const message = input.value
    let data: string
    try {
      let form = new FormData()
      form.append('message', message)
      const res = await fetch(`https://hugstore.it/chat`, {
        method: 'POST',
        body: form,
        cache: 'no-store',
      })
      data = await res.text()
    } catch (e) {
      // @ts-ignore
      console.log(e.error)
      setMessages((messages) => [
        ...messages,
        'problema di connessione, riprovare',
      ])
    } finally {
      setMessages((messages) => [...messages, message])
      setTimeout(() => {
        setMessages((messages) => [...messages, data])
        setIsLoading(false)
      }, 1000)

      // @ts-ignore
      input.value = ''
      return true
    }
  }
  useEffect(() => {
    const messagesContainer =
      window.document.getElementById('container-messages')
    // @ts-ignore
    messagesContainer.scrollTop = messagesContainer.scrollHeight
  }, [messages])
  // @ts-ignore
  return (
    <div
      id="container-chat"
      className="bg-gray-200 border-2 w-[350px] h-[500px] flex flex-col	justify-between rounded-xl overflow-hidden"
      style={{
        boxShadow: '0 0 15px 5px #00000030',
      }}
    >
      <div
        id="container-messages"
        className="overflow-auto flex flex-col mt-3 p-2"
      >
        {messages.map((message, index) => {
          issuer = !issuer
          return (
            <Message key={index} issuer={issuer}>
              {message}
            </Message>
          )
        })}
        {isLoading && (
          <Message issuer={false}>
            <ThreeDots
              height="30"
              width="30"
              radius="2"
              color="#4fa94d"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              visible={true}
            />
          </Message>
        )}
      </div>
      <div
        id="container-sender"
        className=" h-[60px] w-full flex justify-center items-center mb-2"
      >
        <div
          className="flex gap-2  w-full h-[40px] items-center justify-center"
        >
          <textarea
            id="get_message"
            className="rounded-full pt-2 w-full ml-2 resize-none outline-none h-full  bg-white text-black pl-4"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                // @ts-ignore
                if (input.value.length === 0) return
                chat()
              } else if (e.key === ' ') {
                e.preventDefault()
                // @ts-ignore
                input.value += ' '
              }
            }}
            autoComplete="off"
          />
          <button
            onClick={(e) => {
              e.preventDefault()
              if (input.value.length === 0) return
              chat();
            }}
            type="submit"
            value="enter"
            className="w-fit aspect-square rounded-full p-2 mr-2 bg-my-dark-blue"
          >
            <img src={send} width={20} height={20} alt="enter" />
          </button>
        </div>
      </div>
    </div>
  )
}
