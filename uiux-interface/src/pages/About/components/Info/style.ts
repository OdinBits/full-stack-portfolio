import { globalStyle } from "../../../../app/globalStyle";

export const style = {
    container: {
        // border:'solid 2px',
        padding: {lg:'0px 350px'},
        ...globalStyle.horizontallyCenter
    },
    content: {
        // border:'solid 2px',
        textAlign:'center',
        padding:'10px'
    },
    title: {
        
        // border:'solid 2px',
        margin:'2rem 0px 30px 0px',
        fontSize:'40px',
        color:'#0e1015',
        fontFamily: 'Fjalla One, sans-serif', 
    },
    paragraph: {
        textAlign:{xs:'left',md:'center'},
        padding:'30px',
        fontSize:'19px',
        color:'#0e1015',
        lineHeight: 1.6,
        fontWeight: 300,
        // letterSpacing: '0.3px',
    }
}