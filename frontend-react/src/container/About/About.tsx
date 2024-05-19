import { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import aboutStyle from "./AboutStyle";
import { aboutConfig } from "../../shared/config/About";
import { useAppDispatch, useAppSelector } from "../../store";
import { urlFor } from "../../shared/config/client";
import aboutThunk from "../../store/thunks/aboutThunk";
import { AppWrap } from "../../wrapper";

const About = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(aboutThunk());
    }, [dispatch]);

    const { data } = useAppSelector((state) => state.about);

    return (
        <Box id='about-section' sx={aboutStyle.aboutSection}>
            {/* Main content section */}
            <Box data-id='about-content' sx={aboutStyle.aboutContent}>
                {/* Acceptance container */}
                <Box data-id='acceptance-container' >
                    {/* Acceptance message box */}
                    <Box data-id='acceptance-message' sx={aboutStyle.acceptanceMessage}>
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
                {/* Skill Container */}
                <Grid container sx={aboutStyle.skillContainer}>
                    {data?.map((about:any) => (
                        <Grid data-id={`skill-item-${about.id}`} item key={about.id} sx={aboutStyle.skillItems}>
                            <Box
                                data-id={`skill-item-image-${about.id}`}
                                component="img"
                                src={urlFor(about.imgUrl)}
                                alt={about.title}
                                sx={aboutStyle.skillImage}
                            />
                            <Typography data-id={`skill-item-title-${about.id}`} variant="h5" sx={aboutStyle.skillTitle}>
                                {about.title}
                            </Typography>
                            <Typography data-id={`skill-item-description-${about.id}`} variant="subtitle1" sx={aboutStyle.skillDescription}>
                                {about.description}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default AppWrap({Component: About ,idName:'about-section'})
