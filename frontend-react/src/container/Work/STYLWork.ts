import { STYLGlobal } from "../../STYLGlobal";

const STYLWork = {

    workContainer: {
        flexGrow: 1,
        height: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        background:'#F3F5F7'
    },

    workContent: {
        width: '100%',
        height: '100%',

    },

    workIntro: {
        workIntroMessage: {
            fontfamily: '',
            fontWeight: "bold",
            fontSize: "30px",
        },
        workIntroHighlight: {
            color: "#5c05f2",
            fontWeight: "bold",
            fontSize: "30px",
        },
    },

    workSkills: {
        workFilterContainer: {
            margin: '10px',
            display: {xs:'none',md:'flex'},
            justifyContent:'center',
            alignItems:'center'
        },
        skillButtons: {
            boxShadow: '0 7px 18px 0 rgba(2,118,179,0.13)',
            padding: '5px',
            margin: '5px',
            borderRadius: '10px',
            width: 'fit-content',
            fontSize: '14px',
            transition: 'transform 0.3s ease, padding-inline 0.3s ease',
            '&:hover': {
                transform: 'scale(1.05) translateY(-5px)',
                paddingInline: '10px',
            },
        }
    },

    workItems: {
        itemsContainer: {
            width: '100%',
            display:'flex',
            justifyContent:'center'
        },
        cardContainer: {
            maxWidth:345,
            borderRadius: '10px',
            background:'#FFFF',
            margin: 2,
            flexDirection:{xs:'column',md:'row'},
            textAlign: 'center',
            padding: '10px',
            transition: 'box-shadow 0.3s ease', // Add smooth transition for boxShadow
            '&:hover': {
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add box shadow on hover
            },
        },
        imgBox: {
            width: '100%',
            height: '150px',
            position: 'relative',
            borderRadius: '10px',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
        },
        img: {
            width: '100%',
            height: '100%',
            borderRadius: '10px',
            transition: 'filter 0.3s ease',
            position: 'relative',
            '&:hover': {
                filter: 'blur(2px)', // Show hoverBox on hover
            },
        },
        hoverBox: {
            position: 'absolute',
            zIndex: 1,
            width: '100%',
            height: '100%',
            borderRadius: '10px',
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(2px)',
            opacity: 0, // Initially hide the hoverBox
            transition: 'opacity 0.3s ease', // Smooth transition for opacity change
        
            '&:hover': {
                opacity: 1, // Make the hoverBox visible on hover
            },
        },
        
        hoverContent: {
            width: '100%',
            height: '100%',
            ...STYLGlobal.centeredStyles,
        },
        imageTags: {
            padding:'5px',
            width:'fit-content',
            position:'absolute',
            bottom:0,
            margin:'auto',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
            background:'#FFFF',
            fontSize:'13px',
            fontWeight:'bold',
            zIndex:2,
            color:'#736c6c',
            letterSpacing: '0.1em',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(2px)',
        }
    }
}

export default STYLWork;