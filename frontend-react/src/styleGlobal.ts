import { createTheme } from "@mui/material";

// styles/centeredStyles.js
export const styleGlobal = {
  centeredStyles: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export const globalTheme = createTheme({
  typography: {
    fontFamily: [
      'Ubuntu',
      'sans-serif'
    ].join(','),
  },
  palette: {
    primary: {
      main: '#848785', // Replace with your primary color
    },
    secondary: {
      main: '#f50057', // Replace with your secondary color
    },
    background: {
      default: '#ffffff', // Replace with your background color
      paper: '#f4f4f4', // Replace with your paper background color
    },
    text: {
      primary: '#000000', // Replace with your primary text color
      secondary: '#666666', // Replace with your secondary text color
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '18px',
          '&:hover': {
            backgroundColor: '#035FB2',
            color: 'white'
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color:'#838687'
        }
      }
    }
  },
});
