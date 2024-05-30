import { Box } from '@mui/material';
import style from './style';
import { workConfig } from '../../shared/config/workConfig';
import TextBuilder from '../../components/TextBuilder';
import { AppWrap } from '../../wrapper';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { setFilterData } from '../../store/slices/workSlice';
import workThunk from '../../store/thunks/workThunk';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import NavbarTypes from '../../shared/types/NavbarTypes';
import Filter from './components/Filter';
import WorkItems from './components/WorkItems';

const Work = () => {

    const [clickedButton, setClickedButton] = useState<string>('');
    const dispatch = useAppDispatch();

    function handleWorkFilter(title: string): void {
        if (clickedButton === title) {
            setClickedButton('');
            dispatch(setFilterData(''));
        } else {
            setClickedButton(title);
            dispatch(setFilterData(title));
        }
    }

    const [inView, setInView] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    const handleEnter = () => setInView(true);
    const handleExit = () => setInView(false);

    const handleViewportChange = (desktop: any) => setIsDesktop(desktop); // Function to handle viewport change

    const sectionRef = useIntersectionObserver(NavbarTypes.navPages[2].name, handleEnter, handleExit);

    const { filteredData } = useAppSelector((state) => state.work);

    useEffect(() => {
        dispatch(workThunk());
    }, [dispatch]);

    return (
        <Box
            ref={sectionRef}
            id='Work'
            sx={style.workContainer}
        >
            {/*Main content container*/}
            <Box
                data-id='work-content'
                sx={style.workContent}
            >
                {/*Intro Work Text*/}
                <TextBuilder
                    data={workConfig.workIntroText}
                    defaultStyle={style.workIntro.workIntroMessage}
                    highLightStyle={style.workIntro.workIntroHighlight}
                />
                {/*Work skills container*/}
                <Filter
                    clickedButton={clickedButton}
                    handleWorkFilter={handleWorkFilter}
                />
                {/*Work filter container*/}
                <WorkItems
                    filteredData={filteredData}
                    isDesktop={isDesktop}
                />
            </Box>
        </Box>
    )
}

export default AppWrap({ Component: Work, idName: 'Work', showCopyright: false });