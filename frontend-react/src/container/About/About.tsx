import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { about } from "../../shared/types/About";

const About = () => {
    return (
        <Box sx={{ margin: "5px" }}>
            <Box
                className="outerMsgBox"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography
                    sx={{
                        width: "100%",
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: "20px",
                    }}
                >
                    I Know That <span style={{ color: "#5c05f2" }}>Good Design</span>
                    <br />
                    Means <span style={{ color: "#5c05f2" }}>Good Bussiness</span>
                </Typography>
            </Box>

            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                xs={12}
                sx={{
                    flexDirection: { xs: "column", md: "row" },
                    margin: "auto",
                }}
            >
                {about.map((about, index) => (
                    <Grid
                        item
                        key={about.title + index}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        xs={5}
                        md={3}
                        sx={{
                            textAlign: "center",
                            margin: "5px",
                            borderRadius: "10px",
                            flexDirection: { xs: "column", md: "row" },
                            padding:'10px'
                        }}
                    >
                        <Box
                            component="img"
                            src={about.imgUrl}
                            alt={about.title}
                            sx={{ width: "100%", height: "170px", borderRadius: "10px" }}
                        />
                        <Typography variant="h5">{about.title}</Typography>
                        <Typography variant="subtitle1">{about.description}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default About;
