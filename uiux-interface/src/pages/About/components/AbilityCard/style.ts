import { globalStyle } from "../../../../app/globalStyle";

export const style = {
    container: {
        // border: 'solid 2px blue',
        // marginTop:'30px',
        width: '100%',
        overflowX:'hidden',
        // height: {xs:'55vh',sm:'38vh',md:'39vh',lg:'55vh',xl:'57vh'},
        ...globalStyle.centerDiv,

    },
    content: {
        // overflowY:'hidden',
        width:{xs:'330px',md:'400px',lg:'400px'},
        height:'100%',
        padding:'30px',
        // border: 'solid 2px green',
        // ...globalStyle.verticallyCenter
    },
    cardContainer: {
        // flex: 1,
        // border: 'solid 2px',
        width:'100%',
        height:{xs:'300px',md:'310px',lg:'410px'},
        // margin: '10px 20px',
        // transition: 'transform 0.5s, opacity 0.5s'
    },
    media: {
        width: '100%',
        height:{xs:'150px',lg:'250px'}
    },
    cardContent: {
        padding: '10px 15px'
    },
    title: {
        fontSize: '1.5rem',
        fontWeight: 'bold'
    },
    description: {
        fontSize: '17px',
        marginTop: '20px'
    },
};
