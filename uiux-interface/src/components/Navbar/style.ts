import { globalStyle } from "../../app/globalStyle";


export const style = {
    container: {
        width:'100%',
    },
    content: {
        // ...globalStyle.maxStrech,
        // border:'solid 2px',
        height:{xs:'70px',md:'35%'}
    },
    backdrop: {
        backdropFilter: 'blur(1.5px)',
        backgroundColor: 'rgba(233, 242, 235, 0.5)',
        zIndex:1
    }
}