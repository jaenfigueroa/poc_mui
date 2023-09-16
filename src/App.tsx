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

const App = () => {
  return (
    <>
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
