import  { AuthContextProvider } from "../components/auth/AuthContext";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (

      <html lang="it">
        <body>{children}</body>
      </html>

  )
}
