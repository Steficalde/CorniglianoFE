import { AuthContextProvider } from '../components/auth/AuthContext'
import ChatPopup from "../components/chat/ChatPopup";
import Menu from "../components/menu/Menu";
import { useRequireAdmin } from "../hooks/useRequireAdmin";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  useRequireAdmin()
  return (
    <>
      ADMIN LAYOIUT
      {children}
    </>
  )
}
