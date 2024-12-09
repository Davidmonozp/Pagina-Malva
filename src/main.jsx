import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MalvaApp from './MalvaApp.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MalvaApp />
    </BrowserRouter>
  </StrictMode>,
)
