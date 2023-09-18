import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Box,
  Button,
  Container,
  Paper,
  Slider,
  TextField,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ToogleTheme from './theme/toogleTheme'
import SliderCustom from './components/SliderCustom'

const App = () => {
  return (
    <>
      {/* TOOGLE PARA CAMBIAR DE TEMAS */}
      <ToogleTheme />
      <Autocomplete
        disablePortal
        id='combo-box-demo'
        options={['vaca', 'cerdo', 'caballo']}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label='Movie' />}
        size='small'
      />
      <Autocomplete
        disablePortal
        id='combo-box-demo'
        options={['vaca', 'cerdo', 'caballo']}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label='Movie' />}
        size='medium'
      />
      <SliderCustom />
      <Typography variant='h3' component='h3'>
        Hola mundo
      </Typography>
      <Slider
        sx={{
          color: 'red',
          '& .MuiSlider-thumb': {
            borderRadius: '1px',
          },
          '& .MuiSlider-track': {
            backgroundColor: 'blue',
          },
          '& .MuiSlider-rail': {
            backgroundColor: 'green',
          },
        }}
      />

      <Button variant='outlined' size='small'>
        Comprar small
      </Button>
      <Button variant='outlined' size='medium'>
        Comprar medium
      </Button>
      <Button variant='outlined' size='large'>
        Comprar large
      </Button>

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
      <Button color='info' variant='outlined'>
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
