import assets from "../../shared/constants/images";
import { styleGlobal } from "../../styleGlobal";

const style = {
    headerSection: {
        flexGrow: 1,
        height: '100%',
        minHeight:'100vh',
        backgroundImage: `url(${assets.bgIMG})`,
        backgroundSize: 'cover',
        zIndex:-2,
        ...styleGlobal.centeredStyles
    },
    headerContent: {
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        margin:'10px',
        width:{md:'80%',xs:'100%'},
        height:'100%'
    },
    introContainer: {
        display:{xs:'block',md:'flex'},
        width:'60%',
        flexDirection: 'column',
        margin:{xs:'10px',md:'0px'},
        flexWrap:'wrap',
        zIndex:20,
        alignItems:'flex-end'
    },
    introText: {
        borderRadius: '15px',
        boxShadow: '0 7px 18px 0 rgba(2,118,179,0.13)',
        width:'100%',
        height:'100px',
        marginBottom:'20px',
        ...styleGlobal.centeredStyles
    },
    intro:{
        marginLeft:20,
        flexGrow:1
    },
    introBox: {
        marginTop:'10px',
        borderRadius: '15px',
        boxShadow: '0 7px 18px 0 rgba(2,118,179,0.13)',
        minWidth:'fit-content',
        width:'80%',
        flexWrap: 'wrap',
        textAlign:'center',
        padding:'5px',
        ...styleGlobal.centeredStyles
    },
    portfolioContent:{
        width:{xs:'90%',md:'60%'},
        ...styleGlobal.centeredStyles
    },
    portfolioImage: {
        position: 'relative',
        width:'90%',
        zIndex:5,
        margin:'auto'
    },
    introRoleText:{
        margin: '3px',
        minWidth:'fit-content',
        position: 'relative',
        fontSize:'18px',
        fontFamily: '"Noto Sans", sans-serif',
        color:'#727375'
    },

    porfolioImage: {
        image: {
            width:{md:'70%',xs:'100%'},
            borderRadius:'50%'
        },
        circleImage: {
            position: 'absolute',
            bottom:{xs:0,md:'-100px'},
            zIndex:-1,
    
        },
    },

    
    skillsContainer: {
        display:'flex',
        flexDirection: { xs: 'row', md: 'column' },
        justifyContent:'center',
        width:{xs:'100%',md:'50%'},
        flexWrap:'wrap'
    },
    skillItem: {
        borderRadius: '50%',
        DivShadow: '0 0 20px rgba(0,0,0,0.1)',
        margin: '10px',
        ...styleGlobal.centeredStyles
    },
    skillItemImage: {
        width: '60%',
        height: '60%',
        borderRadius: '50%',
    }
}

export default style;