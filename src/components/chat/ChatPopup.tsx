import { Fragment, useState } from "react";
import { Menu } from "@headlessui/react";
import bot from "../../assets/images/chatbot.png";
import MessagesContainer from "./MessagesContainer";


export default function ChatPopup() {
  const [open,setOpen] = useState(false)

  return (
      <Menu as="div" className="fixed right-4 bottom-4 z-50 ">
        <Menu.Items>
          {/* @ts-ignore */}
          <Menu.Item as={Fragment} autoClose={false}>
            <MessagesContainer></MessagesContainer>
          </Menu.Item>
        </Menu.Items>
        <div className="flex justify-end mt-4">
          <Menu.Button id="b" className="rounded-full p-3 border-0 bg-my-dark-blue duration-200 hover:scale-[102%]"
          >
            <img src={bot} alt="chat" width={30} />
          </Menu.Button>
        </div>
      </Menu>
  )



}
