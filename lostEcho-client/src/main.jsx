import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router'
import MainLayout from './layout/MainLayout'
import AuthProvider from './Provider/AuthProvider'
import { Bounce, ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
        transition={Bounce}
      />
      <RouterProvider router={router}>
        <MainLayout />
      </RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
