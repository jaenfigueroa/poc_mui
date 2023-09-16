import { Box, Button } from '@mui/material'

const App = () => {
  return (
    <Box component='div' display={'flex'} gap={1}>
      <Button variant='contained'>Comprar</Button>
      <Button variant='outlined'>Comprar</Button>
      <Button variant='text'>Comprar</Button>
    </Box>
  )
}

export default App
