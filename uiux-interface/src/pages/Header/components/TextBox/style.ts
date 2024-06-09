import { globalStyle } from "../../../../app/globalStyle";


export const style = {

    container: {
        width: {md:'100%'},
        height: '100%',
        // border:'solid 2px',
        padding:{xs:'0px 20px',md:'0px 30px'},
        display:'flex',
        justifyContent:'center',
        flexDirection:{xs:'column',md:'row'}
    },
    photoContainer: {
            width: { xs: '100%', md: '570px', lg: '600px' },
            height: { xs: '100%', md: '570px', lg: '650px' },
            position: 'relative',
            paddingTop: { xs: '20px', md: '20px' },
            boxShadow: 'none',
            // border:'solid 2px',
            ...globalStyle.horizontallyCenter
    },
    content: {
        width: '100%',
        padding: '10px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // border: 'solid 1px',
        ...globalStyle.textWrap
    },
    greet: {
        fontSize: '19px',
        color:'#69757d',
        letterSpacing: '0.5px',
        letterHeight:' 1px',
        fontWeight:100,
        width:'100%',
        ...globalStyle.textWrap
    },
    brief: {
        color: '#212529',
        fontSize: {xs:'30px',md:'35px'},
        lineHeight: 1.2,
        fontWeight: 300,
        letterSpacing: '0.3px',
        fontFamily: 'Fjalla One, sans-serif', 
        borderRadius: '5px',
        // margin:'0px auto',
        ...globalStyle.textWrap,
        // border:'solid 2px',
        width:{xs:'100%',md:'65%'}
    },
    button: {
        width:{sm:'220px'},
        padding:'20px',
        border:'solid 1px #69757d',
    },
    photo: {
        clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
        position: {xs:'relative',md:'absolute'},
        width: { xs: '80%', sm: '60%', md: '89%', lg: '90%' },
        height: { xs: '80%', sm: '60%', md: '89%', lg: '80%' },
        bottom: 0,
        left: {md:'50%'},
        transform: {md:'translateX(-50%)'}
        }
}