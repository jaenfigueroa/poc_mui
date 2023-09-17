import { createTheme, responsiveFontSizes } from '@mui/material'

const PRIMARY_COLORS = {
  main: '#6816f7',
  light: '#9e6bfb',
  dark: '#4600e8',
  // '50': '#f0e6fe',
  // '100': '#d7c2fc',
  // '200': '#bb98fb',
  // '300': '#9e6bfb' /* light */,
  // '400': '#8546fa',
  // '500': '#6816f7' /* main */,
  // '600': '#5b10f1',
  // '700': '#4600e8' /* dark */,
  // '800': '#2b00e4',
  // '900': '#0000df',
  contrastText: '#fff', // COLOR DE TEXTO PARA MAIN
}

const SECONDARY_COLORS = {
  main: '#ff3366',
  light: '#ff6c95',
  dark: '#d7295f',
  // '50': '#ffe6ed',
  // '100': '#ffbfd2',
  // '200': '#ff96b3',
  // '300': '#ff6c95' /* light */,
  // '400': '#ff4d7d',
  // '500': '#ff3366' /* main */,
  // '600': '#ee2e63',
  // '700': '#d7295f' /* dark */,
  // '800': '#c2235c',
  // '900': '#9e1956',
  contrastText: '#fff', // COLOR DE TEXTO PARA MAIN
}

// TEMA CLARO
const THEME_LIGHT = createTheme({
  palette: {
    mode: 'light',
    primary: {
      ...PRIMARY_COLORS,
    },
    secondary: {
      ...SECONDARY_COLORS,
    },
    common: {
      white: '#fff',
      black: '#202020',
    },
    background: {
      paper: '#fff',
      default: '#fafafa',
    },
  },
})

// TEMA OSCURO
const THEME_DARK = createTheme({
  ...THEME_LIGHT,
  palette: {
    mode: 'dark',
    primary: {
      ...PRIMARY_COLORS,
    },
    secondary: {
      ...SECONDARY_COLORS,
    },
    background: {
      paper: '#202020',
      default: '#202020',
    },
  },
})

// APLICAR TEXTO RESPONSIVE AL TEMA OSCURO
export const THEME_DARK_RESPONSIVE = responsiveFontSizes(THEME_DARK, {
  factor: 4,
})

// APLICAR TEXTO RESPONSIVE AL TEMA CLARO
export const THEME_LIGHT_RESPONSIVE = responsiveFontSizes(THEME_LIGHT, {
  factor: 4,
})
