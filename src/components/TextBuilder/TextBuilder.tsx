import React from "react";
import { Typography } from "@mui/material";
import { IText } from "../../shared/interfaces/IText";
import './style.scss';

const TextBuilder: React.FC<IText> = ({ data, defaultStyle, highLightStyle }) => {
    return (
        <div className='text-container'>
            <div className="content-container">
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
            </div>
        </div>
    );
};

export default TextBuilder;