import { globalStyles } from "../../AppGlobalStyles";

export const vividTextStyle = {
    textContainer: {
        width: "100%",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: {xs:'10px',md:'28px'},
        padding: '5px',
        boxSizing: 'border-box',
        minHeight: '150px',
        ...globalStyles.centeredStyles
    },
    textContent: {
        width: 'fit-content'
    }
}