import React from "react";
import { Box } from "@mui/material";
import style from "./style";
import { aboutConfig } from "../../shared/config/aboutConfig";
import { AppWrap } from "../../wrapper";
import TextBuilder from "../../components/TextBuilder";
import { useAppDispatch, useAppSelector } from "../../store";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import NavbarType from "../../shared/types/NavbarTypes";
import aboutThunk from "../../store/thunks/aboutThunk";
import Items from "./components/Items";

const About = () => {

    const dispatch = useAppDispatch();

    const sectionRef = useIntersectionObserver(NavbarType.navPages[1].name);

    React.useEffect(() => {
        dispatch(aboutThunk());
    }, [dispatch]);

    const { data } = useAppSelector((state) => state.about);

    const aboutComponents = React.useMemo(() => (
        data?.map((about: any, index: number) => (
            <Items key={index} about={about}/>
        ))
    ), [data]);

    return (
        <Box ref={sectionRef} id='About' sx={style.aboutContainer}>
            {/* Main content section */}
            <Box data-id='about-content' sx={style.aboutContent}>
                {/* Acceptance container */}
                <TextBuilder
                    data={aboutConfig.aboutIntroText}
                    defaultStyle={style.acceptanceMessage}
                    highLightStyle={style.acceptanceMsgColor}
                />
                {/* Skill Container */}
                <Box data-id='skill-container' sx={style.aboutComponentContainer}>
                    {aboutComponents}
                </Box>
            </Box>
        </Box>
    );
};

export default AppWrap({ Component: About, idName: 'About'});
