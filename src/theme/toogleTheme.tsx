import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import IconButton from '@mui/material/IconButton'
import { ColorModeContext } from './themeContext'
import { useTheme } from '@mui/material/styles'
import { useContext } from 'react'

const ToogleTheme = () => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  return (
    <IconButton onClick={colorMode.toggleColorMode} color='inherit'>
      {theme.palette.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  )
}

export default ToogleTheme
