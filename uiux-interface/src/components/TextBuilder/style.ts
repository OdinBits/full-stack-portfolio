import { globalStyle } from "../../app/globalStyle"



export const style = {
    textContainer: {
        width: "100%",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: {xs:'10px',md:'28px'},
        padding: '5px',
        boxSizing: 'border-box',
        minHeight: 'fit-content',
        ...globalStyle.centerDiv
    },
    textContent: {
        width: {xs:'100%',md:'47%'},
        padding:'5px 10px',
        lineHeight:2,
        marginBottom:5
        // border:'solid 2px'
    }
}