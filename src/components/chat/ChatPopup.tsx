
import { Fragment, useEffect, useState } from 'react'
import { Menu } from '@headlessui/react'
import bot from '../../assets/images/chatbot.png'
import MessagesContainer from './MessagesContainer'


export default function ChatPopup() {


  return (
      <Menu as="div" className="fixed right-4 bottom-4 z-50">
        <Menu.Items>
          {/* @ts-ignore */}
          <Menu.Item as={Fragment} autoClose={false}>
            <MessagesContainer></MessagesContainer>
          </Menu.Item>
        </Menu.Items>
        <div className="flex justify-end mt-4">
          <Menu.Button className="rounded-full p-3 border-0 bg-my-dark-blue">
            <img src={bot} alt="chat" width={30} />
          </Menu.Button>
        </div>
      </Menu>
  )



}
