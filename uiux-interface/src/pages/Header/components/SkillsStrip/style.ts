import { globalStyle } from "../../../../app/globalStyle";

export const style = {
    container:{
        // border:'solid 2px ',
        width:'100%',
        minHeight:'70px',
        height:'100%',
        background:'#F5F5F5',
        marginBottom:'30px',
        flexWrap:'wrap',
        ...globalStyle.verticallyCenter
    },
    content: {
        margin:'auto',
        // border:'solid 2px',
        width:'fit-content',
        height:'100%',
        flexWrap:'wrap',
        padding:'0px 20px',
        ...globalStyle.centerDiv
    },
    cardMedia: {
        // border:'solid 2px',
        width:'30px',
        height:'30px',
        margin:'20px',
        // filter: 'brightness(1) invert(1) sepia(100%) saturate(10%) hue-rotate(300deg)',
    }
}