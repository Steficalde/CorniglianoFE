import React from "react";

export default function MobileMenu({
  children,
  isOpen,
  handleMenu,
  className = '',
}: {
  children: React.ReactNode
  isOpen: boolean
  handleMenu: () => void
  className?: string
}) {
  return (
    <div
      className={`absolute z-10 flex transition duration-200 inset-0 ${
        isOpen ? `` : `-translate-x-full`
      }`}
    >
      <div className={`w-[60%] h-full pt-20 px-4 bg-white ${className}`}>
        {children}
      </div>
      <div className="w-[40%] h-full z-30" onClick={handleMenu}></div>
    </div>
  )
}
