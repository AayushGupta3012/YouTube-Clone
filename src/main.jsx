import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './context/Authprovider.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UtilsContextProvider } from './context/UtilsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <UtilsContextProvider>
        <App />
      </UtilsContextProvider>
    </AuthProvider>
  </BrowserRouter>
)
