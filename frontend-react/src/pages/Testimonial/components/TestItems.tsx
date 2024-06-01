import { Box, Typography } from '@mui/material';
import { memo } from 'react';
import { ITest } from '../../../shared/interfaces/ITest';
import { urlFor } from '../../../shared/config/clientConfig';

const TestItems: React.FC<ITest.APIResTest> = ({ test }) => {
    return (
        <Box sx={{border:'solid 2px blue',width:'60%',display:'flex',justifyContent:'center'}}>
            <Box
                component='img'
                src={urlFor(test.imgurl)}
                alt='test'
                sx={{width:'100%'}}
            />
                <Box sx={{border:'solid 2px', display:'flex',
            alignItems:'center',
            flexDirection:'column',
            justifyContent:'center'}}>
                    <Typography variant='subtitle2'>{test.feedback}</Typography>
                    <Box>
                        <Typography> {test.name}</Typography>
                    </Box>
                </Box>
        </Box>
    )
}

export default memo(TestItems);
