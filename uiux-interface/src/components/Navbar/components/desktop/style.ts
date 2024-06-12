import { globalStyle } from "../../../../app/globalStyle";


export const style =  {
    container: {
        display: { xs: 'none', md: 'block'},
        height:'70px',
        width:'100%',
        textAlign:'center',
        position: 'fixed',
        top: 0, 
        zIndex:100,
        backdropFilter: 'blur(10px)',  // Apply the blur effect
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        boxShadow: '0 1px 0.4px rgba(0, 0, 0, 0.2)',
        // border:'solid 2px blue',
    },
    buttons: {
        my: 2,
        mx: 1,
        color: '#919191',
        // border:'solid 2px blue',
        transition: 'background-color 0.3s ease-in-out',
        '&:hover': {
            backgroundColor: '#fff',
            color: '#3c52b2',
        },
    },
    
}