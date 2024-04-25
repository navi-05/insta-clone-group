import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ClerkProvider from './providers/ClerkProvider.jsx'
import { Toaster } from '@/components/shad/ui/sonner'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider>
      <Toaster richColors/>
      <App />
    </ClerkProvider>
  </React.StrictMode>,
)
