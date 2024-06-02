import { globalStyle } from "../../../../app/globalStyle";


export const style =  {
    container: {
        display: { xs: 'none', md: 'block'},
        textAlign:'center',
        ...globalStyle.maxStrech
    },
    buttons: {
        my: 2,
        mx: 1,
        color: '#919191',
        transition: 'background-color 0.3s ease-in-out',
        '&:hover': {
            backgroundColor: '#fff',
            color: '#3c52b2',
        },
    },
    
}