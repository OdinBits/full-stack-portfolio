

const STYLTools = {

    navDots: {
        container:{
            width: '50px',
            height: '100%',
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
            position: 'absolute',
            right: 0
        },
        pagesStyle: {
            borderRadius: '50%',
            width: '10px',
            height: '10px',
            margin: '10px',
            transition: 'background-color 0.3s ease' 
        }
    },

    socialMedia: {
        container: {
            width: 'fit-content',
            height:'100%',
            minHeight: '100vh',
            display: {xs:'none',md:'flex'},
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            position:'absolute',
            bottom:2,
            left:10
        },
        items : {
            borderRadius:'50%', 
            background:'white', 
            padding:'10px',
            marginBottom:'15px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            width:'10px',
            height:'10px',
            border:'solid 2px'
        }
    }
}

export default STYLTools;