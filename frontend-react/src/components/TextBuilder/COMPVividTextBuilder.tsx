import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { IText } from '../../shared/interfaces/IText';
import { STYLvividTextStyle } from './STYLvividTextStyle';


const COMPVividTextBuilder = ({ data, defaultStyle, highLightStyle }: IText) => {
    return (
        <Box
            data-id='text-container'
            sx={STYLvividTextStyle.textContainer}
        >
            <Box
                data-id='text-content'
                sx={STYLvividTextStyle.textContent}
            >
                {data.map((message: any, index: any) => (
                    <Typography
                        key={message.id}
                        component="span"
                        sx={message.isColored ? highLightStyle : defaultStyle}
                    >
                        {message.text}
                    </Typography>
                ))}
            </Box>
        </Box>
    );
};

export default COMPVividTextBuilder;