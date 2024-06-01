import { styleGlobal } from "../../styleGlobal";

const style = {

    aboutContainer: {
        flexGrow: 1,
        height: '100%',
        minHeight: '100vh',
        ...styleGlobal.centeredStyles,
    },

    aboutComponentContainer: {
        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        width:'fit-content',
                        padding:'30px',
                        flexWrap:'wrap',
                        alignItems:'center',
                        justifyContent:'center'
    },
    aboutContent: {
        width: { xs: '100%', md: '80%' },
        height: '100%',
        flexDirection: 'column',
        margin: 'auto',
        padding: '10px',
        ...styleGlobal.centeredStyles
    },
    aboutSignificance: {
        width: '100%',
        height: 'fit-content',
        flexWrap: 'wrap',
        ...styleGlobal.centeredStyles,
        boxSizing: 'border-box',
    },
    acceptanceMessage: {
        width: "100%",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "30px",
        padding: '5px',
        boxSizing: 'border-box',

    },
    acceptanceMsgColor: {
        color: "#5c05f2",
        fontWeight: "bold",
        fontSize: "30px",
    },
    skillContainer: {
        width: '100%',
        height: '100%',
        flexDirection: { xs: "column", md: "row" },
        flexWrap: 'wrap',
        display: 'flex',
        justifyContent: 'center',
        alignItems: { xs: 'center', md: 'stretch' },
        margin: 'auto'
    },

    skillItems: {
        items: {
            textAlign: "center",
            margin: '50px 10px 0px 10px',
            display: 'flex',
            minHeight: 265,
            heigh:'100%',
            justifyContent: 'center',
            width: 265
        },
        cardContainer: {
            margin: 'auto',
            width: '100%',
            height: '100%',
        },
        cardMedia: {
            height: 140, 
            objectFit: 'cover'
        },
        cardContent: {
            height: 150, 
            objectFit: 'cover'
        },
        skillTitle: {
            marginTop: '10px',
        },
        skillDescription: {
            marginTop: '10px',
        },
    }
};

export default style;
