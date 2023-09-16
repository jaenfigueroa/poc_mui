import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// FUENTE ROBOTO PARA MUI
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
// CSS BASELINE - RESET CSS DE MUI
import CssBaseline from '@mui/material/CssBaseline'
//PROVEER EL TEMA DE MUI
import { ThemeProvider } from '@mui/material/styles'
import appTheme from './theme/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
