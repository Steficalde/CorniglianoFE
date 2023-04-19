

// @ts-ignore
export default function MobileMenu({ children, isOpen, handleMenu }) {
  return (
    <div className={`absolute z-50 flex transition duration-200 inset-0 ${isOpen ? `` : `-translate-x-full`}`}>
      <div className="w-[60%] h-full">{children}</div>
      <div className="w-[40%] h-full" onClick={handleMenu}></div>
    </div>
  )
}
