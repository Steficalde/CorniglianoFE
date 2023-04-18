import Menu from '../components/menu/Menu'
import ChatPopup from '../components/chat/ChatPopup'

export default function GuestLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <ChatPopup />
        <Menu />
        {children}
      </body>
    </html>
  )
}
