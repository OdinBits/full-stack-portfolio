import { globalStyle } from "../../../../app/globalStyle";


export const style = {

    container: {
        width: '50%',
        border: 'solid 2px',
        height: '100%',
        paddingTop:'30px'
    },
    greet: {
        border: 'solid 2px',
        fontSize: '18px',
        color:'#69757d',
        fontFamiliy:'Nunito',
        letterSpacing: '0.5px',
        letterHeight:' 1px',
        fontWeight:100,
        ...globalStyle.textWrap
    },
    brief: {
        border: '2px solid #212529',
        color: '#212529',
        fontSize: '35px',
        lineHeight: 1.5,
        fontWeight: 300,
        letterSpacing: '-1px',
        letterHeight:' 1px',
        width:'95%',
        fontFamily: 'Fjalla One, sans-serif', 
        borderRadius: '5px',
        ...globalStyle.textWrap
    },
    button: {
        border: 'solid 2px',
        width:'240px',
        padding:'20px'
    }
}