import { globalStyle } from "../../../../app/globalStyle";

export const style = {
    container: {
        // border:'solid 2px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 40px',
        height: '100%'
    },
    content: {
        display: 'flex',
        // border: 'solid 1px blue',
        margin: '20px',
        height: '100%',
        width: { xs: '100%', md: '60%' },
        flexDirection: { xs: 'column', md: 'row' }
    },
    rolesDiv: {
        height: '100%',
        width: { xs: '40%', md: '20%' },
        // border: 'solid 1px',
        display: 'flex',
        justifyContent: { md: 'flex-end' },
        // borderRight: 'solid 5px blue'
    },
    rolesTitle: {
        // border: 'solid 2px',
        minWidth: 'fit-content',
        width: '100px',
        padding: '5px',
        textAlign: { xs: 'center', md: 'right' },
        background: '#305c91',
        color: 'white',
        fontSize: '20px'
    },
    rolesDataContainer: {
        height: '100%',
        width: '100%',
        padding: '5px 5px 5px 20px',
        borderLeft: { md: 'solid 3px #305c91' },
        borderTop: { xs: 'solid 3px #305c91', md: 'none' },
        display: 'flex',
        flexDirection: 'column'
    },
    rolesDataDiv: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    codeItemTitle: {
        fontSize: '26px',
        margin: '10px 0px',
        color: '#0e1015',
        fontFamily: 'Fjalla One, sans-serif',
    },
    codePoints: {
        position: 'relative',
        paddingRight: '14px', 
        fontSize:'16px',
        color:'#212529',
        marginRight:'7px',// Adjust for bullet space
        '&::after': {
            content: '"\\2022"', // Unicode for bullet
            color: '#305c91', // Bullet color
            fontSize: '25px', // Increase bullet size
            position: 'absolute',
            right: '0',
            top: '50%',
            transform: 'translateY(-50%)',
        }
    }
}