import { styleGlobal } from "../../styleGlobal";

const STYLSkills = {
    skillsContainer: {
        flexGrow: 1,
        height: '100%',
        minHeight:'100vh',
        display:'flex',
        justifyContent:'center',
    },
    skillsContent: {
        width: { xs: '80%', md: '70%' },
        height: '100%',
        flexDirection: 'column',
        display:'flex',
    },
    introMessage: {
        width: "100%",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "30px",
        padding: '5px',
        boxSizing: 'border-box',
    },
    

    skillItems: {
        skillsContainer: {
        width: '100%',
        height: '100%',
        flexDirection: { xs: "column", md: "row" },
        flexWrap: 'wrap',
        display:'flex',
        justifyContent:'space-between',
        alignItems: { xs: 'center', md: 'stretch' },
        },
        stillContent:{

        },
        // motionDivContent: {
        //     border:'solid 2px blue',
        //     width:'100%',
        //     display:'flex'
        // },
        skillsGrid: {
            width:'30%',
            textAlign:'center'
        },
        // skillsGridMotionDiv: {
        //     border:'solid 2px green',
        //     width:'100%'
        // },
        skillImgBox: {
            borderRadius:'50%',
            width:'50%',
            padding:'20px',
            ...styleGlobal.centeredStyles
        }
    }
}

export default STYLSkills;