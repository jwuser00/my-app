import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import AppTheme from './AppTheme'
// import AppMentor_useReducer from './AppMentor_useReducer'
import AppProducts from './AppProducts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProducts />
  </StrictMode>
)
