import { STYLGlobal } from "../../STYLGlobal";

const STYLAbout = {

    main: {

    },

    aboutContainer: {
        flexGrow: 1,
        height: '100%',
        minHeight: '100vh',
        ...STYLGlobal.centeredStyles,
    },
    aboutContent: {
        width: { xs: '100%', md: '80%' },
        height: '100%',
        flexDirection: 'column',
        margin: 'auto',
        padding: '10px',
        ...STYLGlobal.centeredStyles
    },
    aboutSignificance: {
        width: '100%',
        height: 'fit-content',
        flexWrap: 'wrap',
        ...STYLGlobal.centeredStyles,
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
            margin: '10px',
            display: 'flex',
            height: 265,
            justifyContent: 'center',
            width: 265
        },
        cardContainer: {
            margin: 'auto',
            width: '100%',
            height: '100%'
        },
        cardMedia: {
            height: 140, 
            objectFit: 'cover'
        },
        cardContent: {
            height: 140, 
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

export default STYLAbout;
