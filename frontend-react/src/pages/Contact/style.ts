import { styleGlobal } from "../../styleGlobal";

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
            marginBottom:'30px'
        },
        text: {
            fontWeight: "bold",
            fontSize: "30px",
        },
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
            display: 'flex',
            borderRadius:'10px',
            background:'#ffe0fd',
            width:'210px',
            height:'fit-content'
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
            padding: '10px'
        },
        anchorTag: {
            width: '100%',
            border:'none',
            textAlign: 'center',
            textDecoration:'none',
            ...styleGlobal.centeredStyles
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
            width:'265px'
        }
    }
}

export default style;