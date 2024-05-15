import assets from "../../shared/constants/images";

const headerStyle = {
    headerContainer: {
        backgroundImage: `url(${assets.bgIMG})`,
        backgroundSize: 'cover',
        marginTop: '5px',
        border:'solid 2px blue'
    },
    headerContent: {
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        border:'solid 2px green',
        width:{xs:'100%',md:'80%'}
    },
    introContainer: {
        width: '20%',
        flexDirection:'column',
        border:'solid 2px green'
    },
    introText: {
        margin: '20px',
        borderRadius: '15px',
        DivShadow: '0 7px 18px 0 rgba(2,118,179,0.13)',
        border:'solid 2px green',
        width:'200px'
    },
    introBox: {
        margin: '20px',
        padding: '5px',
        borderRadius: '15px',
        DivShadow: '0 7px 18px 0 rgba(2,118,179,0.13)',
        border:'solid 2px purple'
    },
    introRole: {
        position: 'relative',
        border:'solid 2px '
    },
    portfolioImages: {
        width: { xs: '90%', zIndex: 1 }
    },
    circleImage: {
        position: 'absolute',
        top: 40,
        left: 0,
        width: '100%',
    },
    skillsContainer: {
        flexdirection: { xs: 'row', md: 'column' }
    },
    skillItem: {
        borderRadius: '50%',
        background: 'var(--white-color)',
        DivShadow: '0 0 20px rgba(0,0,0,0.1)',
        margin: '10px',
    },
    skillItemImage: {
        width: '60%',
        height: '60%',
        borderRadius: '50%'
    }
}

export default headerStyle;