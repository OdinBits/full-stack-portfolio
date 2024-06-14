

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
        fontSize: '50px',
        width: '60px',
        textAlign: 'center',
        transition: 'all 0.3s ease-in-out', // Smooth transition for all properties
        '&:hover': {
            color: 'blue', // Change color on hover
            transform: 'scale(1.7)', // Grow the text to 120% of its original size
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
        transition: 'all 0.3s ease-in-out', // Smooth transition for all properties
        '&:hover': {
            color: 'blue', // Change color on hover
            transform: 'scale(1.2)', // Grow the text to 120% of its original size
        },
    }
}