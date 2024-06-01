import { styleGlobal } from "../../styleGlobal";

const style = {

    workContainer: {
        flexGrow: 1,
        height: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        background: '#F3F5F7',
    },

    workContent: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
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
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            width: '100%',
            height: '100%'
        },
        skillButtons: {
            boxShadow: '0 7px 18px 0 rgba(2,118,179,0.13)',
            padding: '5px',
            margin: '10px',
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
            width: '90%',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
        },
        gridContainer: {
            maxWidth: 345,
            height: 'fit-content',
            borderRadius: '10px',
            background: '#FFFF',
            margin: 2,
            flexDirection: { xs: 'column', md: 'row' },
            textAlign: 'center',
            padding: '10px',
            transition: 'box-shadow 0.3s ease', // Add smooth transition for boxShadow
            '&:hover': {
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add box shadow on hover
            },
        },
        cardContainer: {
            width: '100%',
            height: '100%',
            boxShadow: 'none'
        },
        imgBox: {
            width: '100%',
            height: '150px',
            position: 'relative',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        img: {
            width: '100%',
            height: '100%',
            borderRadius: '10px',
            transition: 'filter 0.3s ease',
            position: 'relative',
            '&:hover': {
                filter: 'blur(2px)',
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
            opacity: 0,
            transition: 'opacity 0.3s ease',

            '&:hover': {
                opacity: 1,
            },
        },

        hoverContent: {
            width: '100%',
            height: '100%',
            ...styleGlobal.centeredStyles,
        },
        imageTags: {
            padding: '5px',
            width: 'fit-content',
            position: 'absolute',
            bottom: 0,
            margin: 'auto',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
            background: '#FFFF',
            fontSize: '13px',
            fontWeight: 'bold',
            zIndex: 2,
            color: '#736c6c',
            letterSpacing: '0.1em',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(2px)',
        },
        bulletPointsContainer: {
            width: '90%',
            height: '100%',
            textAlign: 'left',
            padding: '10px',
            marginTop: '20px',
            borderRadius: '10px',
            background: '#ebf7f7',
        },
        bulletPoints: {
            marginTop: '1px',
            color: '#8c9396',
            '&:hover': {
                color: 'rgba(255, 0, 0, 0.5)'
            }
        },
        visibilityIcon: {
            color: 'white',
            borderRadius: '50%',
            padding: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '5px',
            width: '30px',
            height: '30px',
            cursor: 'pointer'
        },
        gitHubIcon: {
            color: 'white',
            borderRadius: '50%',
            padding: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '5px',
            width: '30px',
            height: '30px',
            cursor: 'pointer'
        }
    }
}

export default style;