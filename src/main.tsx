import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// FUENTE ROBOTO PARA MUI
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
// CSS BASELINE - RESET CSS DE MUI
// import CssBaseline from '@mui/material/CssBaseline'

//PROVEER EL TEMA DE MUI
// import { THEME_DARK_RESPONSIVE, THEME_LIGHT_RESPONSIVE } from './theme/index.tsx'

// CONTEXT PARA EL TEMA DE MUI
import { ToggleColorMode } from './theme/themeContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToggleColorMode>
      <App />
    </ToggleColorMode>
  </React.StrictMode>
)
