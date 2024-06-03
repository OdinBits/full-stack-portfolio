import { globalStyle } from "../../../../app/globalStyle";


export const style = {
    container: {
        width: { xs: '100%', md: '570px', lg: '600px' },
        height: { xs: '100%', md: '570px', lg: '650px' },
        position: 'relative',
        paddingTop: { xs: '20px', md: '20px' },
        boxShadow: 'none',
        // border:'solid 2px',
        ...globalStyle.horizontallyCenter
    },
    photo: {
    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
    position: {xs:'relative',md:'absolute'},
    width: { xs: '80%', sm: '60%', md: '89%', lg: '90%' },
    height: { xs: '80%', sm: '60%', md: '89%', lg: '80%' },
    bottom: 0,
    left: {md:'50%'},
    transform: {md:'translateX(-50%)'}
    }
}