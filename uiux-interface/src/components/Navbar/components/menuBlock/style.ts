
export const style = {
    container: {
        width: '50vw',
        height: '100vh', 
        position: 'fixed', 
        top: 0, 
        left: 0, 
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