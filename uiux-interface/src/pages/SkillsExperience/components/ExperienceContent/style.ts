import { globalStyle } from "../../../../app/globalStyle";


export const style = {
    content:{
        width:{md:'30%'},
        borderRadius:'10px',
        border:'solid 1.5px #a0a1a3',
        margin:'10px auto',
        padding:'5px'
    },
    selectDiv : {
        // border:'solid 2px green',
        width:'60%',
        margin:'auto'
    },
    img: {
        // border:'solid 2px brown',
        width:'100%',
        height:'100%',
        background:'#f2f2f2',
        borderRadius:'10px'
    },
    expInfo: {

        width:'100%',
        padding:'5px',
    },
    expContainer: {
        width:'100%',
        height:'100%',
        padding:'10px 5px',
        
    },
    expBox: {
        border:'solid 2px red',

    }, 
    indicator: {
        height: '1.8px',
        
        transition: 'background 0.3s',
    },
    imgBox: {
        cursor: 'pointer',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'right',
        // margin:'7px 6px',
        
        // border:'solid 3px '
    },
    title: {
        fontSize: '21px',
        fontFamily: 'Fjalla One, sans-serif',
        color: '#0e1015',
    },
    date: {
        fontSize: '16px', 
        // paddingBottom: '10px',
        color:'#212529',
        fontStyle:'italic',
    },
    description: {
        letterSpacing:'0.5px',
        letterHeight:'1px',
        fontSize:'16px',
        color:'#595856'
    },
    devToolsContainer: {
        display: 'flex', 
        // margin:'10px 0px',
        borderRadius:'10px',
        // border:'solid 2px',
        width:'fit-content',
        height:'100%',
        flexWrap:'wrap'
    },
    devToolsText: {
        color:'#212529',
        // border:'solid 2px',
        fontSize:'17px',
        width:'200px',
        margin:'auto '
    },
    devToolsPoints: {
        padding: '10px 10px', 
        margin: '5px',
        background:'#abb8c3',
        color:'#284c77',
        fontSize:'17px',
        // border:'solid 2px',
        flexWrap:'wrap'
    },
    subTitle: {
        margin:'10px 0px',
        fontSize:'22px',
        color: '#0e1015',
    },
    li: {
        marginLeft:'10px',
        color: '#305c91',

    }
}