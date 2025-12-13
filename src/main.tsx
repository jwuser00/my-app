import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppTheme from './AppTheme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppTheme />
  </StrictMode>
)
