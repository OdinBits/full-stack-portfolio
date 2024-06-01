import { Box } from '@mui/material';
import style from './style';
import { workConfig } from '../../shared/config/workConfig';
import TextBuilder from '../../components/TextBuilder';
import { AppWrap } from '../../wrapper';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import workThunk from '../../store/thunks/workThunk';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import NavbarTypes from '../../shared/types/NavbarTypes';
import Filter from './components/Filter';
import WorkItems from './components/WorkItems';
import { useFilter } from '../../hooks/useFilter';

const Work = () => {

    const dispatch = useAppDispatch();
    const { data } = useAppSelector((state) => state.work);
    const [clickedButton, setClickedButton] = useState<string>('');

    const filteredData = useFilter({ workItems: data.works, filter: clickedButton });

    function handleWorkFilter(title: string): void {
        setClickedButton(clickedButton === title ? '' : title);
    }

    const sectionRef = useIntersectionObserver(NavbarTypes.navPages[2].name);

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
                    filterList={data?.filterOptions}                    
                />
                {/*Work filter container*/}
                <WorkItems
                    filteredData={filteredData}
                />
            </Box>
        </Box>
    )
}

export default AppWrap({ Component: Work, idName: 'Work'});