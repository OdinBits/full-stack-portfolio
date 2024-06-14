import { Box, Typography } from "@mui/material";
import { style } from "./style";
import { IText } from "../../shared/interfaces/IText";
import React from "react";

const TextBuilder: React.FC<IText> = ({ data, defaultStyle, highLightStyle }) => {
    return (
        <Box data-id='text-container' sx={style.textContainer}>
            <Box data-id='text-content' sx={style.textContent}>
                {data?.map((message: any) => (
                    <React.Fragment key={`message-${message.id}`}>
                        <Typography
                            component="span"
                            sx={message.isColored ? highLightStyle : defaultStyle}
                        >
                            {message.text}
                        </Typography>
                        <br />
                    </React.Fragment>
                ))}
            </Box>
        </Box>
    );
};

export default TextBuilder;