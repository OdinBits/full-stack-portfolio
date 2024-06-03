
export const style = {
    container: {
        width: '50vw',
        height: '100vh', // Ensures the container takes up the full height of the viewport
        position: 'fixed', // Change from 'absolute' to 'fixed'
        top: 0, // Ensures it is positioned at the top of the viewport
        left: 0, // Ensures it is positioned at the left of the viewport
        display: { md: 'none' },
        boxShadow: '0 7px 18px 0 rgba(2,118,179,0.13)',
        background: 'white',
        zIndex: 2,
    },
    iconButton: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:'20px',
        width:'50px',
        height:'50px',
        border:'solid 1px #e4ebe5'
    },
    cancelIcon: {
        fontSize:'25px'
    },
    iconContainer: {
        display:'flex',
        justifyContent:'flex-end',
        padding: '20px 20px 0 0',
    },
    button: {
        width:'100%',
        flexDirection:'column',
        textAlign:'right',
        paddingRight:'20px'
    }
}