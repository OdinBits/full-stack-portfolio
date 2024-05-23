import { globalStyles } from "../../AppGlobalStyles";

const aboutStyle = {
    aboutSection: {
        flexGrow: 1,
        height: '100%',
        minHeight:'100vh',
        ...globalStyles.centeredStyles,
    },
    aboutContent: {
        width: { xs: '100%', md: '60%' },
        height: '100%',
        flexDirection: 'column',
        margin: 'auto',
        padding:'10px'
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
        alignItems: { xs: 'center', md: 'stretch' }

    },
    skillItems: {
        textAlign: "center",
        margin: "5px",
        borderRadius: "10px",
        padding: '10px',
        width: { xs: '90%', md: '30%' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    skillImage: {
        minHeight:'150px',
        width: { xs: '60%', md: "90%" },
        height: { xs: '100%', md:'150px'},
        borderRadius: "10px",
    },
    skillTitle: {
        marginTop: '10px',
    },
    skillDescription: {
        marginTop: '10px',
    },
};

export default aboutStyle;
