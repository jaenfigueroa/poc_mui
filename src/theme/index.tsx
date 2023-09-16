import { createTheme } from '@mui/material'

const appTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff3366',
      light: '#ff6c95',
      dark: '#d7295f',
      '50': '#ffe6ed',
      '100': '#ffbfd2',
      '200': '#ff96b3',
      '300': '#ff6c95' /* light */,
      '400': '#ff4d7d',
      '500': '#ff3366' /* main */,
      '600': '#ee2e63',
      '700': '#d7295f' /* dark */,
      '800': '#c2235c',
      '900': '#9e1956',
    },
    secondary: {
      main: '#6816f7',
      light: '#9e6bfb',
      dark: '#4600e8',
      '50': '#f0e6fe',
      '100': '#d7c2fc',
      '200': '#bb98fb',
      '300': '#9e6bfb' /* light */,
      '400': '#8546fa',
      '500': '#6816f7' /* main */,
      '600': '#5b10f1',
      '700': '#4600e8' /* dark */,
      '800': '#2b00e4',
      '900': '#0000df',
    },
    common: {
      white: '#fefefe',
      black: '#202020',
    },
    background: {
      paper: '#202020',
      default: '#202020',
    },
  },
})

export default appTheme
