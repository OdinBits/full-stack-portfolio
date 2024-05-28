import { createTheme } from "@mui/material";

// styles/centeredStyles.js
export const STYLGlobal = {
  centeredStyles : {
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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '18px',
          '&:hover': {
            backgroundColor: '#035FB2',
            color:'white' 
        },
        },
      },
    },
  },
});
