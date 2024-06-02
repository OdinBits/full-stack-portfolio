import { globalStyle } from "../../app/globalStyle";

export const style = {
        container: {
            height:'100vh',
            ...globalStyle.centerDiv,
        },
        content: {
            width:'93%',
            display:'flex',
            marginTop:'100px',
            height:'70vh',
            flexDirection:{md:'row'},
        }
}