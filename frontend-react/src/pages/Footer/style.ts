import { styleGlobal } from "../../styleGlobal";

const style = {

    main: {
        container: {
            flexGrow: 1,
            height: '100%',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            background: '#F3F5F7',
        },
        content: {
            width: '80%',
            border: 'solid 2px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
        },
        text: {
            fontWeight: "bold",
            fontSize: "30px",
        },
    },

    contacts: {
        container: {
            width: '210px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '5px',
            border: 'solid 2px blue'
        },
        email: {
            display: 'flex',
            border: 'solid 2px brown'
        },
        mobile: {
            display: 'flex',
            border: 'solid 2px green'
        },
        img: {
            width: '50px',
            minHeight: '50px',
            padding: '10px'
        },
        anchorTag: {
            width: '100%',
            border: 'solid 2px blue',
            textAlign: 'center',
            ...styleGlobal.centeredStyles
        }
    },

    form: {
        container: {
            
        },
        content: {

        },
        textField: {

        }
    }
}

export default style;