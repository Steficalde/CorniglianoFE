import Menu from "../components/menu/Menu";
import ChatPopup from "../components/chat/ChatPopup";
import React from "react";

export default function GuestLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Menu />
      {children}
      <ChatPopup />
    </>
  )
}
