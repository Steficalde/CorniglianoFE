import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Shops from './pages/Shops'
import { AuthContextProvider } from './components/auth/AuthContext'
import AdminShops from './pages/admin/AdminShops'
import AdminAwards from './pages/admin/AdminAwards'
import Admin from './pages/admin/Admin'
import AdminSettings from './pages/admin/AdminSettings'
import AwardPage from "./pages/admin/Award/AwardPage";
import Privacy from "./pages/Privacy";
import Contatti from "./pages/Contatti";

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
    path: '/contatti',
    element: <Contatti />,
  },
  {
    path: '/shops',
    element: <Shops />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
  {
    path: '/admin/shops',
    element: <AdminShops />,
  },
  {
    path: '/admin/awards',
    element: <AdminAwards />,
  },
    {
    path: '/admin/awards/:id',
    element: <AwardPage />,
  },
  {
    path: '/admin/settings',
    element: <AdminSettings />,
  },
    {
    path: '/privacy',
    element: <Privacy />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>,
)
