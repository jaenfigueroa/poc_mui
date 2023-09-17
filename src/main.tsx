import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// FUENTE ROBOTO PARA MUI
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
// CONTEXT PARA EL TEMA DE MUI
import { ToggleColorMode } from './theme/themeContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToggleColorMode>
      <App />
    </ToggleColorMode>
  </React.StrictMode>
)
