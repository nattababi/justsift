import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    typography: {
        fontSize: 12,
        subtitle1: {
          fontSize: 12,
        },
        body1: {
          fontWeight: 500,
        },
        button: {
          textTransform: 'none',
          backgroundColor: '#999',
          color: 'white'
        },
      },
      palette: {
        primary: {
          main: "#c6c6c6",
          contrastText: "#fff" //button text white instead of black
        },
        background: {
          default: "#394764"
        }
      }
  });