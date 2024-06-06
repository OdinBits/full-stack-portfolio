import { globalStyle } from "../../../../app/globalStyle";


export const style = {

    container: {
        width: {md:'50%'},
        height: '100%',
        // border:'solid 2px',
        display:'flex',
        justifyContent:'center'
    },
    content: {
        height: '100%',
        width: '100%',
        padding: '10px 20px',
        display: 'flex',
        flexDirection: 'column',
        // border: 'solid 1px',
    },
    greet: {
        fontSize: '19px',
        color:'#69757d',
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
        margin:'0px auto',
        ...globalStyle.textWrap
    },
    button: {
        width:{sm:'220px'},
        padding:'20px',
        border:'solid 1px #69757d',
    }
}