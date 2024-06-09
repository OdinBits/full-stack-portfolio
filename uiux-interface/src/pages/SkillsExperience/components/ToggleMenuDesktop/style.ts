import { globalStyle } from "../../../../app/globalStyle";


export const style =  {
    container: {
        display: { xs: 'none', md: 'inline-flex'},
        textAlign:'center',
        // border:'solid 2px',
        justifyContent:'center',
        
        ...globalStyle.maxStrech
    },
    buttons: {
        width:'fit-content',
        color: '#919191',
        transition: 'background-color 0.3s ease-in-out',
        '&:hover': {
            backgroundColor: '#f2f2f2',
            color: '#3c52b2',
        },
        borderRadius:'10px',
    },
    name: {
        fontSize:'18px',
        padding:'5px',
        color:'#0e1015'
    }
    
}