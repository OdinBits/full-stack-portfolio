import { Box } from '@mui/material';
import STYLWork from './STYLWork';
import { CFGWork } from '../../shared/config/CFGWork';
import COMPVividTextBuilder from '../../components/TextBuilder/COMPVividTextBuilder';
import COMPWorkItems from './COMPWorkItems';
import COMPFilter from './COMPFilter';
import { AppWrap } from '../../wrapper';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { setFilterData } from '../../store/slices/SLCWork';
import THKwork from '../../store/thunks/THKWork';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import TNavbar from '../../shared/types/TNavbar';

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

    const sectionRef = useIntersectionObserver(TNavbar.navPages[2].name, handleEnter, handleExit, handleViewportChange);

    const { filteredData } = useAppSelector((state) => state.work);
    
    useEffect(() => {
        dispatch(THKwork());
    }, [dispatch]);

    return (
        <Box ref={sectionRef} id='WORK' sx={STYLWork.workContainer}>
            {/*Main content container*/}
            <Box data-id='work-content' sx={STYLWork.workContent}>
                {/*Intro Work Text*/}
                <COMPVividTextBuilder data={CFGWork.workIntroText} defaultStyle={STYLWork.workIntro.workIntroMessage} highLightStyle={STYLWork.workIntro.workIntroHighlight} />
                {/*Work skills container*/}
                <COMPFilter clickedButton={clickedButton} handleWorkFilter={handleWorkFilter}/>
                {/*Work filter container*/}
                <COMPWorkItems filteredData={filteredData} isDesktop={isDesktop}/>
            </Box>
        </Box>
    )
}

export default AppWrap({ Component: Work, idName: 'WORK', showCopyright:false});