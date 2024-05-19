import React from 'react';
import { Box } from '@mui/material';
import { socialAttributes } from '../../shared/types/SocialAttributes';

const SocialMedia = () => (
    <Box
        sx={{
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
        }}
    >
        {socialAttributes.media.map((item) => (
            <Box key={item.id} sx={{borderRadius:'50%', background:'white', padding:'10px',marginBottom:'15px',display:'flex',justifyContent:'center',alignItems:'center',width:'10px',height:'10px',border:'solid 2px'}}>
                <item.item /> 
            </Box>
        ))}
    </Box>
);

export default SocialMedia;
