import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Shops from './pages/Shops'
import { AuthContextProvider } from './components/auth/AuthContext'
import AdminShops from "./pages/admin/AdminShops";
import AdminAwards from "./pages/admin/AdminAwards";
import Admin from "./pages/admin/Admin";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/shops',
    element: <Shops />,
  },
  {
    path: '/admin',
    element: <Admin />,
    children: [
      {
        path: '/admin/shops',
        element: <AdminShops />,
      },
      {
        path: '/admin/awards',
        element: <AdminAwards />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>,
)
