import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './config/router/index.tsx'
import { ThemeModeProvider } from './config/theme';
import { AuthProvider } from 'config/auth/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <ThemeModeProvider>
        <RouterProvider router={router} />
      </ThemeModeProvider>
    </AuthProvider>
  </StrictMode>,
)
