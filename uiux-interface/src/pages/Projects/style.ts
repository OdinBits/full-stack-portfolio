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
        height:{xs:'300px',md:'560px'},
        // padding:'6px',
        borderRadius:'18px',
        overflow:'hidden',
        position:'relative'

    },
    iconContainer: {
        position:'absolute',
        // border:'solid 2px',
        width:'stretch'
    },
    gitHub: {
        
    },
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius:'18px',
        position:'relative',
        
        // boxShadow: '0 7px 18px 0 rgba(2,118,179,0.13)',
        // ...globalStyle.maxStrech
    },
    confidentialOverlay: {
        position: 'absolute',
        top: '0%',
        left: '0%',
        textAlign:'center',
        margin:'auto',
        // transform: 'translate(0%, -600%)',
        // backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: {xs:'70px 20px',md:'200px 20px'},
        width:'100%',
        height:'100%',
        borderRadius: '5px',
        // border:'solid 2px'
    },
    confidentialText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: '40px',
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
        fontSize:'24px',
        paddingTop:{xs:'20px',md:'0px'},
        // border:'solid 2px'
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
        width:'50%'
    },
    points: {
        margin:'5px',
        paddingRight:'10px',
        color:'#0e1015',
        width:'fit-content',
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