import { Box, Grid, Typography } from "@mui/material";
import aboutStyle from "./AboutStyle";
import { aboutConfig } from "../../shared/config/About";
import { useAppDispatch, useAppSelector } from "../../store";
import { urlFor } from "../../api/client";

const About = () => {
    const { data } = useAppSelector((state) => state.about)
    return (
        <Box id='about-container' sx={aboutStyle.aboutContainer}>
            {/* Main content container */}
            <Box data-id='acceptance-container' sx={aboutStyle.aboutSignificance}>
                <Box sx={aboutStyle.acceptanceMessage}>
                    {aboutConfig.aboutIntroText.map((message, index) => (
                        <Typography
                            key={message.id}
                            component="span"
                            sx={message.isColored ? aboutStyle.acceptanceMsgColor : aboutStyle.acceptanceMessage}
                        >
                            {message.text}
                            {(index === 1 || index === 3) && <br />}
                        </Typography>
                    ))}
                </Box>
            </Box>
            {/* Skills images */}
            <Grid container sx={aboutStyle.skillContainer}>
                {data?.map((about:any) => (
                    <Grid data-id={`skill-item-${about.id}`} item key={about.id} sx={aboutStyle.skillItems}>
                        <Box data-id={`skill-item-image-${about.id}`} component="img" src={urlFor(data?.imgUrl)} alt={about.title} sx={aboutStyle.skillImage} />
                        <Typography data-id={`skill-item-title-${about.id}`} variant="h5">{about.title}</Typography>
                        <Typography data-id={`skill-item-description-${about.id}`} variant="subtitle1">{about.description}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default About;
