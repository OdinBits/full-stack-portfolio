import { globalStyle } from "../../../../app/globalStyle";


export const style = {

    container: {
        // border:'solid 2px',
        padding:{xs:'10px',lg:'0px 350px'},
        ...globalStyle.horizontallyCenter
    },
    content: {
        // border:'solid 2px',
        textAlign:{xs:'left',lg:'center'},
    },
    title: {
        
        // border:'solid 2px',
        textAlign:'center',
        margin:'30px 0px 30px 0px',
        padding:'10px',
        fontSize:'40px',
        color:'#0e1015',
        fontFamily: 'Fjalla One, sans-serif', 
    },
    paragraph: {
        padding:'10px',
        fontSize:'19px',
        color:'#0e1015',
        lineHeight: 1.6,
        fontWeight: 300,
        // letterSpacing: '0.3px',
    }
}