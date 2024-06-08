import { Box, Typography } from "@mui/material";
import { style } from "./style";
import { IText } from "../../shared/interfaces/IText";


const TextBuilder = ({ data, defaultStyle, highLightStyle }: IText) => {
    return (
        <Box data-id='text-container' sx={style.textContainer}>
            <Box data-id='text-content'  sx={style.textContent}>
                {data?.map((message: any) => (
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

export default TextBuilder;