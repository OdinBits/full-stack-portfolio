import { globalStyle } from "../../app/globalStyle";


export const style = {
    container: {
        width:'100%',
        height:'35%',
        
    },
    content: {
        ...globalStyle.maxStrech
    },
    backdrop: {
        backdropFilter: 'blur(1.5px)',
        backgroundColor: 'rgba(233, 242, 235, 0.5)',
        zIndex:1
    }
}