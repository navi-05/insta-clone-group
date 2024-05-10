import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import { Toaster } from '@/components/shad/ui/sonner'

// Providers
import ClerkProvider from './providers/ClerkProvider.jsx'
import RouteProvider from './providers/RouteProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider>
      <RouteProvider />
      <Toaster />
    </ClerkProvider>
  </React.StrictMode>,
)
