import assets from "../../shared/constants/CONSTImages";
import { STYLGlobal } from "../../STYLGlobal";

const STYLHeader = {
    headerSection: {
        flexGrow: 1,
        height: '100%',
        minHeight:'100vh',
        backgroundImage: `url(${assets.bgIMG})`,
        backgroundSize: 'cover',
        zIndex:-2,
        ...STYLGlobal.centeredStyles
    },
    headerContent: {
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        margin:'10px',
        width:{md:'60%',xs:'100%'},
    },
    introContainer: {
        display:{xs:'block',md:'flex'},
        width:{xs:'50%',md:'35%'},
        flexDirection: 'column',
        margin:{xs:'10px',md:'0px'},
        wrap:'flex-wrap',
        zIndex:20
    },
    introText: {
        borderRadius: '15px',
        boxShadow: '0 7px 18px 0 rgba(2,118,179,0.13)',
        width:'100%',
        ...STYLGlobal.centeredStyles
    },
    intro:{
        marginLeft:20
    },
    introBox: {
        marginTop:'10px',
        borderRadius: '15px',
        boxShadow: '0 7px 18px 0 rgba(2,118,179,0.13)',
        minWidth:'fit-content',
        width:'100%',
        flexWrap: 'wrap',
        textAlign:'center',
        ...STYLGlobal.centeredStyles
    },
    portfolioContent:{
        width:{xs:'90%',md:'60%'},
        ...STYLGlobal.centeredStyles
    },
    portfolioImage: {
        position: 'relative',
        width:'100%',
        zIndex:5
    },
    introRoleText:{
        margin: '3px',
        minWidth:'fit-content',
        position: 'relative',
        fontSize:'25px',
        fontFamily: '"Noto Sans", sans-serif',
        color:'#727375'
    },
    portfolioImages: {
        width:{md:'70%',xs:'100%'},
        borderRadius:'50%'
    },
    circleImage: {
        position: 'absolute',
        bottom:{xs:0,md:'-100px'},
        width: '100%',
        zIndex:-1,
    },
    skillsContainer: {
        display:'flex',
        flexDirection: { xs: 'row', md: 'column' },
        justifyContent:'center',
        width:{xs:'100%',md:'20%'},
    },
    skillItem: {
        borderRadius: '50%',
        background: 'white',
        DivShadow: '0 0 20px rgba(0,0,0,0.1)',
        margin: '10px',
        ...STYLGlobal.centeredStyles
    },
    skillItemImage: {
        width: '60%',
        height: '60%',
        borderRadius: '50%'
    }
}

export default STYLHeader;