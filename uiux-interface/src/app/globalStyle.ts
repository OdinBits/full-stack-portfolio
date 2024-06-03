import { createTheme } from "@mui/material";


export const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '1px',
                    '&:hover': {
                        backgroundColor: '#035FB2',
                        color: 'white',
                    },
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#838687',
                    fontSize: 14,
                    fontFamily: 'Nunito Sans, sans-serif',
                },
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: '#838687', 
                },
            },
        },
    },
});

export const globalStyle = {

    maxStrech: {
        width: '100%',
        height: '100%'
    },
    centerDiv : {
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    verticallyCenter: {
        display:'flex',
        alignItems:'center',
    },
    horizontallyCenter: {
        display:'flex',
        justifyContent:'center',
    },
    textWrap: {
        flexWrap:'wrap'
    }
}