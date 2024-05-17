import { globalStyles } from "../../AppGlobalStyles";

const aboutStyle = {
    aboutContainer: {
        width: '100%',
    },
    aboutSignificance: {
        width:'100%',
        height:'fit-content',
        minWidth:'fit-content',
        flexWrap: 'wrap',
        ...globalStyles.centeredStyles
    },
    acceptanceMessage: {
        width: "100%",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "30px",
        padding:'5px'
    },
    acceptanceMsgColor:{
        color: "#5c05f2",
        fontWeight: "bold",
        fontSize: "30px",
    },
    skillContainer: {
        width: '100%',
        flexDirection: { xs: "column", md: "row" },
        ...globalStyles.centeredStyles
    },
    skillItems: {
        textAlign: "center",
        margin: "5px",
        borderRadius: "10px",
        padding: '10px',
        width:{xs:'90%',md:'30%'},
        flexDirection: 'column',
        ...globalStyles.centeredStyles
    },
    skillImage: {
        width: "100%", 
        height: "100%", 
        borderRadius: "10px" 
    }
}

export default aboutStyle;