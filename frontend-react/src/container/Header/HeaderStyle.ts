import assets from "../../shared/constants/images";
import { globalStyles } from "../../AppGlobalStyles";

const headerStyle = {
    headerSection: {
        flexGrow: 1,
        height: '100%',
        minHeight:'100vh',
        backgroundImage: `url(${assets.bgIMG})`,
        backgroundSize: 'cover',
        zIndex:-2,
        ...globalStyles.centeredStyles
    },
    headerContent: {
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        margin:'10px',
        width:{md:'60%',xs:'100%'},
    },
    introContainer: {
        display:{xs:'block',md:'flex'},
        width:{xs:'50%',md:'20%'},
        flexDirection: 'column',
        justifyContent:'center',
        margin:{xs:'10px',md:'0px'},
        wrap:'flex-wrap'
    },
    introText: {
        borderRadius: '15px',
        boxShadow: '0 7px 18px 0 rgba(2,118,179,0.13)',
        width:'100%',
        ...globalStyles.centeredStyles
    },
    intro:{
        marginLeft:20
    },
    introBox: {
        marginTop:'10px',
        borderRadius: '15px',
        boxShadow: '0 7px 18px 0 rgba(2,118,179,0.13)',
        minWidth:'fit-content',
        widht:'fit-content',
        flexWrap: 'wrap',
        ...globalStyles.centeredStyles
    },
    portfolioContent:{
        width:{xs:'90%',md:'60%'},
        ...globalStyles.centeredStyles
    },
    portfolioImage: {
        position: 'relative',
        width:'100%',
        zIndex:5
    },
    introRoleText:{
        margin: '3px',
        minWidth:'fit-content',
    },
    portfolioImages: {
        width:'100%',
    },
    circleImage: {
        position: 'absolute',
        top: 40,
        left: 0,
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
        ...globalStyles.centeredStyles
    },
    skillItemImage: {
        width: '60%',
        height: '60%',
        borderRadius: '50%'
    }
}

export default headerStyle;