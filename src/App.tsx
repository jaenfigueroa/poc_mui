import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Paper,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useContext } from 'react'
import IconButton from '@mui/material/IconButton'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
// ALTERNAR TEMAS
import { useTheme } from '@mui/material/styles'
import { ColorModeContext } from './theme/themeContext'

const App = () => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  return (
    <>
      {/* TOOGLE PARA CAMBIAR DE TEMAS */}
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
          p: 3,
        }}
      >
        {theme.palette.mode} mode
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color='inherit'>
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>

      {/* OTROS */}
      <Box component='div' display={'flex'} gap={1} flexDirection={'column'} alignItems={'start'}>
        <Button variant='contained'>Comprar</Button>
        <Button variant='outlined'>Comprar</Button>
        <Button variant='text'>Comprar</Button>
        <Button color='secondary' variant='contained'>
          Comprar
        </Button>
        <Button color='secondary' variant='outlined'>
          Comprar
        </Button>
        <Button color='secondary' variant='text'>
          Comprar
        </Button>
      </Box>
      <Box component={'div'}>
        <Container>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Descripcion</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque voluptates maiores
                magni ratione unde, architecto recusandae debitis aperiam illum impedit deserunt?
                Laborum libero quas sint adipisci vitae minima fugiat debitis.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Descripcion</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque voluptates maiores
                magni ratione unde, architecto recusandae debitis aperiam illum impedit deserunt?
                Laborum libero quas sint adipisci vitae minima fugiat debitis.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Descripcion</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque voluptates maiores
                magni ratione unde, architecto recusandae debitis aperiam illum impedit deserunt?
                Laborum libero quas sint adipisci vitae minima fugiat debitis.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Container>
      </Box>
      <Box>
        <Paper>Hola mundo</Paper>
      </Box>
      <Button color='info' variant='contained'>
        Hola mundo
      </Button>
      <Typography variant='h1'>Este es un título</Typography>
      <Typography variant='h2'>Este es un título</Typography>
      <Typography variant='h3'>Este es un título</Typography>
      <Typography variant='h4'>Este es un título</Typography>
      <Typography variant='h5'>Este es un título</Typography>
      <Typography variant='h6'>Este es un título</Typography>
      <Typography variant='body1'>Este es un texto de ejemplo.</Typography>
    </>
  )
}

export default App
