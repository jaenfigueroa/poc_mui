import { PaletteColorOptions, Theme, createTheme, responsiveFontSizes } from '@mui/material'

const PRIMARY_COLORS: PaletteColorOptions = {
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

const SECONDARY_COLORS: PaletteColorOptions = {
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

// TEMA CLARO CON FUENTE RESPONSIVE
export const THEME_LIGHT: Theme = responsiveFontSizes(
  createTheme({
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
        black: '#151515',
      },
      background: {
        paper: '#fff',
        default: '#fafafa',
      },
    },
    // components: {
    //   MuiButton: {
    //     // defaultProps: {
    //     //   variant: 'outlined',
    //     // },
    //     styleOverrides: {
    //       root: {
    //         // color: '#ff0',
    //         // fontSize: '4rem',
    //       },
    //     },
    //   },
    // },
  }),
  {
    factor: 4, // factor para la fuente responsive
  }
)

// TEMA OSCURO HEREDANDO FUENTE RESPONSIVE
export const THEME_DARK: Theme = createTheme({
  ...THEME_LIGHT,
  palette: {
    mode: 'dark',
    primary: {
      ...THEME_LIGHT.palette.primary,
    },
    secondary: {
      ...THEME_LIGHT.palette.secondary,
    },
    background: {
      paper: '#151515',
      default: '#151515',
    },
  },
})
