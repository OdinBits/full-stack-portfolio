import { globalStyle } from "../../app/globalStyle"



export const style = {
    textContainer: {
        width: "100%",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: {xs:'10px',md:'28px'},
        padding: '5px',
        boxSizing: 'border-box',
        minHeight: '150px',
        ...globalStyle.centerDiv
    },
    textContent: {
        width: 'fit-content'
    }
}