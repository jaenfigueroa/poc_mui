import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const App = () => {
  return (
    <>
      <Box component='div' display={'flex'} gap={1}>
        <Button variant='contained'>Comprar</Button>
        <Button variant='outlined'>Comprar</Button>
        <Button variant='text'>Comprar</Button>
      </Box>
      <Box component={'div'}>
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
      </Box>
    </>
  )
}

export default App
