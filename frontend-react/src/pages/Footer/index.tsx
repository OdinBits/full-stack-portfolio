import React from 'react';
import { AppBar,Toolbar,Typography, Box } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <AppBar position="static" sx={{background:'#d5ebdf'}}>
            <Toolbar>
                <Box sx={{width:'100%'}}>
                    <Typography variant="body1" component="div" sx={{ flexGrow: 1 , color:'blue', textAlign:'right' }}>
                        &copy; {new Date().getFullYear()} Nishant. All rights reserved.
                    </Typography>
                    {/* Add additional footer components or actions here */}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Footer