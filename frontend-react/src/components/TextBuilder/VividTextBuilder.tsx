import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { vividText } from '../../shared/interfaces/IVividText';
import { vividTextStyle } from './vividTextStyle';


const VividTextBuilder = ({ data , defaultStyle, highLightStyle }:vividText) => {
    return (
        <Box data-id='text-container' sx={vividTextStyle.textContainer}>
            {data.map((message:any, index:any) => (
                <Typography
                    key={message.id}
                    component="span"
                    sx={message.isColored ? highLightStyle : defaultStyle}
                >
                    {message.text}
                </Typography>
            ))}
        </Box>
    );
};

export default VividTextBuilder;