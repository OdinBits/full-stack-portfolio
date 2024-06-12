import { globalStyle } from "../../app/globalStyle";

export const style = {
    container: {
        // border:'solid 2px blue',
        width:'100%'
    },
    content: {
        // border:'solid 2px green',
        width:'100%',
        padding:{md:'30px 30px'},
        margin:'auto',
    },
    titleTheme:{
        textAlign:'center',
        margin:'30px 0px 30px 0px',
        padding:'10px',
        fontSize:'40px',
        color:'#0e1015',
        fontFamily: 'Fjalla One, sans-serif', 
    },
    contentBox: {
        display:'flex',
        flexDirection:{xs:'column',md:'row'},
        margin:'40px auto',
        width:'90%',
        // border:'solid 2px'
    },
    imgContainer: {
        // border:'solid 2px brown',
        width:{xs:'100%',md:'70%'},
        height:{md:'560px'}
    },
    iconContainer: {
        position:'absolute',
        // border:'solid 2px',
        width:'stretch'
    },
    gitHub: {
        
    },
    img: {
        borderRadius:'18px',
        boxShadow: '0 7px 18px 0 rgba(2,118,179,0.13)',
        ...globalStyle.maxStrech
    },
    descContainer: {
        // border:'solid 2px purple',
        marginLeft:{md:'20px'},
        width:{md:'40%'},
        padding:'0px 10px'
    },
    title: {
        color:'#0e1015',
        fontFamily: 'Fjalla One, sans-serif', 
        fontSize:'24px'
    },
    description: {
        color:'#0e1015',
        // letterSpacing: 0.5,
        // lineHeight: 1.6,
        fontSize:'16px'
    },
    devToolsBox: {
        // gap: 1,
        // border:'solid 2px',
        height:'50%'
    },
    devToolsTitle: {
        fontSize:'1rem',
        color:'#0e1015',
    },
    pointsBox: {
        // border:'solid 2px',
        height:'70%',
        flexWrap:'wrap',
        display:'flex',
        flexDirection:'column',
        margin:'7px 0px',
        width:'27%'
    },
    points: {
        margin:'5px 0px',
        // paddingRight:'10px',
        color:'#0e1015',
        // marginTop: '8px',
        height:'fit-content',
        // border:'solid 2px'
    },
    codeLink: {
        textDecoration: 'none',
        marginLeft:'20px',
        fontSize:'16px',
        '&:hover': {
            color: '#305c91'
        }
    }
}