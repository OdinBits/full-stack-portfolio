

export const style = {
    container: {
        // border:'solid 2px',
        height:'100%',
        background:'#d3d7de'
    },
    contacts: {
        // border:'solid 2px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'50%',
        gap: 1,
    },
    text: {
        fontSize: '70px',
        width: '60px',
        textAlign: 'center',
        transition: 'all 0.3s ease-in-out', 
        '&:hover': {
            color: 'blue', 
            transform: 'scale(1.7)', 
        },
    },
    textBox: {
        textAlign:'center',
        padding:'10px 0px'
    },
    designCredit: {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding: '30px 10px',
        width:'80%',
        flexWrap:'wrap',
        margin:'auto'
    },
    creditPoints: {
        textDecoration:'none',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            color: 'blue', 
            transform: 'scale(0.9)', 
        },
        textAlign:{xs:'center',md:'left'}
    }
}