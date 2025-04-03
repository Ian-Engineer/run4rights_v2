import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import router from './config/router/index.ts'
import { ThemeModeProvider } from './config/theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeModeProvider>
      <RouterProvider router={router} />
    </ThemeModeProvider>
  </StrictMode>,
)
