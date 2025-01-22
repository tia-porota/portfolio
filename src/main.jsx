import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { LangProvider } from './context/langContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <LangProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </LangProvider>,
  
)
