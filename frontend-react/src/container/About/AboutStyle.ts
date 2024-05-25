import { globalStyles } from "../../AppGlobalStyles";

const aboutStyle = {
    aboutContainer: {
        flexGrow: 1,
        height: '100%',
        minHeight:'100vh',
        background:'#F3F5F7',
        ...globalStyles.centeredStyles,
    },
    aboutContent: {
        width: { xs: '100%', md: '80%' },
        height: '100%',
        flexDirection: 'column',
        margin: 'auto',
        padding:'10px',
        ...globalStyles.centeredStyles
    },
    aboutSignificance: {
        width: '100%',
        height: 'fit-content',
        flexWrap: 'wrap',
        ...globalStyles.centeredStyles,
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
        display:'flex',
        justifyContent:'center',
        alignItems: { xs: 'center', md: 'stretch' },
        margin:'auto'
    },
    skillItems: {
        textAlign: "center",
        margin:'10px',
        display:'flex',
        height:'300px',
        justifyContent:'center'
    },
    skillImage: {
        height:'165px',
        width: '100%',
    },
    skillTitle: {
        marginTop: '10px',
    },
    skillDescription: {
        marginTop: '10px',
    },
};

export default aboutStyle;
