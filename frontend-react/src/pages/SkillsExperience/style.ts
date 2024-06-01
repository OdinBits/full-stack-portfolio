import { styleGlobal } from "../../styleGlobal";

const style = {
    skillsContainer: {
        flexGrow: 1,
        height: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    skillsContent: {
        width: { xs: '90%', md: '70%' },
        height: '100%',
        flexDirection: 'column',
        display: 'flex',
    },
    introMessage: {
        width: "100%",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "30px",
        padding: '5px',
        boxSizing: 'border-box',
    },
    allItemsContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }
    },
    allItemsContent: {
        width: { xs: '100%', md: '50%' },
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        // alignItems:'center',
    },
    expComponent: {
        marginLeft: { md: '20px' }, 
        width: { xs: '100%', md: '50%', height: '100%' }, 
        paddingLeft: { xs: '30px', md: '0px' }
    },

    skillItems: {
        skillsContainer: {
            width: '100%',
            height: '100%',
            flexDirection: { xs: "column", md: "row" },
            flexWrap: 'wrap',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'stretch' },
        },
        stillContent: {

        },
        skillsGrid: {
            width: '30%',
            textAlign: 'center'
        },
        skillImgBox: {
            borderRadius: '50%',
            width: '50%',
            padding: '20px',
            ...styleGlobal.centeredStyles
        }
    }
}

export default style;