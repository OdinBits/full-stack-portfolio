import { globalStyle } from "../../../../app/globalStyle";


export const style = {

    container: {
        width: {md:'50%'},
        height: '100%',
        // border:'solid 2px',
        display:'flex',
        justifyContent:'center'
    },
    content:{
        height:{xs:'100%',md:'100%',lg:'fit-content'},
        width:'100%',
        padding:'0px 20px',
        margin:{xs:'1px 0px',md:'none'},
        display:'flex',
        flexDirection:'column',
        justifyContent:{md:'space-between'},
        // border:'solid 2px'
        '& > *': {
        marginTop: '20px',
    },
    },
    greet: {
        fontSize: '19px',
        color:'#69757d',
        fontFamiliy:'Nunito',
        letterSpacing: '0.5px',
        letterHeight:' 1px',
        fontWeight:100,
        ...globalStyle.textWrap
    },
    brief: {
        color: '#212529',
        fontSize: '35px',
        lineHeight: 1.2,
        fontWeight: 300,
        letterSpacing: '0.3px',
        fontFamily: 'Fjalla One, sans-serif', 
        borderRadius: '5px',
        margin:'5px auto',
        ...globalStyle.textWrap
    },
    button: {
        width:{sm:'220px'},
        padding:'20px',
        border:'solid 1px green',
    }
}