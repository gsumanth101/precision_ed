import { createTheme } from '@mui/material/styles'


const theme = createTheme({
  typography: {
    fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
  },
  palette: {
    mode: 'light',
    primary: { main: '#18120a' },
  },
})

export default theme