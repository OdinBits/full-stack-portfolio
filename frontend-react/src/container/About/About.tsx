import { Box } from "@mui/material";
import aboutStyle from "./AboutStyle";
import { aboutConfig } from "../../shared/config/About";
import { AppWrap } from "../../wrapper";
import VividTextBuilder from "../../components/TextBuilder/VividTextBuilder";
import Items from "./Items";


const About = () => {

    return (
        <Box id='ABOUT' sx={aboutStyle.aboutContainer}>
            {/* Main content section */}
            <Box data-id='about-content' sx={aboutStyle.aboutContent}>
                {/* Acceptance container */}
                <VividTextBuilder data={aboutConfig.aboutIntroText} defaultStyle={aboutStyle.acceptanceMessage} highLightStyle={aboutStyle.acceptanceMsgColor} />
                {/* Skill Container */}
                <Items />
            </Box>
        </Box>
    );
};

export default AppWrap({ Component: About, idName: 'ABOUT', showCopyright: true });
