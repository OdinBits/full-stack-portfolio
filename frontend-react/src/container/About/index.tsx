import React from "react";
import { Box } from "@mui/material";
import STYLAbout from "./STYLAbout";
import { CFGAbout } from "../../shared/config/CFGAbout";
import { AppWrap } from "../../wrapper";
import COMPVividTextBuilder from "../../components/TextBuilder/COMPVividTextBuilder";
import COMPItems from "./COMPItems";
import { useAppDispatch, useAppSelector } from "../../store";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import TNavbar from "../../shared/types/TNavbar";
import THKAbout from "../../store/thunks/THKAbout";


const About = () => {

    const dispatch = useAppDispatch();
    const [inView, setInView] = React.useState(false);
    const [isDesktop, setIsDesktop] = React.useState(false);

    const handleEnter = () => setInView(true);
    const handleExit = () => setInView(false);
    const handleViewportChange = (desktop: boolean) => setIsDesktop(desktop);

    const sectionRef = useIntersectionObserver(TNavbar.navPages[1].name, handleEnter, handleExit, handleViewportChange);

    React.useEffect(() => {
        dispatch(THKAbout());
    }, [dispatch]);

    const { data } = useAppSelector((state) => state.about);

    const aboutComponents = React.useMemo(() => (
        data?.map((about: any, index: number) => (
            <COMPItems key={index} about={about} isDesktop={isDesktop} />
        ))
    ), [data, isDesktop]);

    return (
        <Box ref={sectionRef} id='ABOUT' sx={STYLAbout.aboutContainer}>
            {/* Main content section */}
            <Box data-id='about-content' sx={STYLAbout.aboutContent}>
                {/* Acceptance container */}
                <COMPVividTextBuilder data={CFGAbout.aboutIntroText} defaultStyle={STYLAbout.acceptanceMessage} highLightStyle={STYLAbout.acceptanceMsgColor} />
                {/* Skill Container */}
                <Box sx={{display:'flex',flexDirection:{xs:'column',md:'row'}}}>
                    {aboutComponents}
                </Box>
            </Box>
        </Box>
    );
};

export default AppWrap({ Component: About, idName: 'ABOUT', showCopyright: false });
