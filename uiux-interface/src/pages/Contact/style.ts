import { globalStyle } from "../../app/globalStyle";


const style = {

    main: {
        container: {
            flexGrow: 1,
            height: '100%',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center',
            background: '#F3F5F7',
            
        },
        content: {
            width: '80%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop:'30px',
            marginBottom:'30px',
        },
        text: {
            fontWeight: "bold",
            fontSize: {xs:'25px',md:"30px"},
        },
        textContainer:{
            width: '100%', 
            height: '100%', 
            marginTop: '30px', 
            display: 'flex', 
            flexDirection: 'column' 
        },
        circularProgression: {
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100%', 
            marginTop: '10px'
        }
    },

    contacts: {
        container: {
            width: '70%',
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center',
            flexDirection: {xs:'column',md:'row'},
            padding: '5px',
        },
        email: {
            borderRadius:'10px',
            background:'#ffe0fd',
            width:'140px',
            height:'fit-content',
            // border:'solid 2px',
            ...globalStyle.centerDiv
        },
        mobile: {
            display: 'flex',
            borderRadius:'10px',
            background:'#e0f2ff',
            width:'210px',
            height:'fit-content'
        },
        img: {
            width: '50px',
            minHeight: '50px',
            padding: '10px',
            // border:'solid 2px'
        },
        anchorTag: {
            width: '100%',
            border:'none',
            textAlign: 'center',
            textDecoration:'none',
            ...globalStyle.horizontallyCenter
        }
    },

    form: {
        container: {
            width:{xs:'90%',md:'70%'},
            display:'flex',
            justifyContent:'center'
        },
        content: {
            display:'flex',
            flexDirection:'column',
            margin:'20px 0px 0px 0px',
            width:{xs:'100%',md:'50%'},
            alignItems:'center'
        },
        textField: {
            marginTop:'10px',
            width:'100%'
        },
        submit: {
            border:'solid 2px #afb3b0',
            marginTop:'10px',
            width:'265px',
            borderRadius:'18px'
        }
    }
}

export default style;