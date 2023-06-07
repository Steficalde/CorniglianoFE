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
import AdminAwardsCreate from "./pages/admin/Award/AdminAwardCreate";
import AdminShopCreate from "./pages/admin/Shop/AdminShopCreate";
import AdminShop from "./pages/admin/Shop/AdminShop";

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
    path: '/admin/shops/:id',
    element: <AdminShop />,
  },
    {
    path: '/admin/shops/new',
    element: <AdminShopCreate />,
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
    path: '/admin/awards/new',
    element: <AdminAwardsCreate />,
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
