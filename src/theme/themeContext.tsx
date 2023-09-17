import { PropsWithChildren, createContext, useMemo, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { THEME_DARK_RESPONSIVE, THEME_LIGHT_RESPONSIVE } from '.'

// CONTEXTO
export const ColorModeContext = createContext({ toggleColorMode: () => {} })

// ALTERNADOR DE TEMAS
export const ToggleColorMode = ({ children }: PropsWithChildren) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )

  const theme = useMemo(
    () => createTheme(mode === 'light' ? THEME_LIGHT_RESPONSIVE : THEME_DARK_RESPONSIVE),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
