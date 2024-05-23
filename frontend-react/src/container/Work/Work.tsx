import { Box } from '@mui/material';
import workStyle from './WorkStyle';
import { workConfig } from '../../shared/config/Work';
import VividTextBuilder from '../../components/TextBuilder/VividTextBuilder';
import { work } from '../../shared/types/Work';
import { useAppDispatch, useAppSelector } from '../../store';
import { setFilterData } from '../../store/slices/workSlice';
import { urlFor } from '../../shared/config/client';

const Work = () => {

    const dispatch = useAppDispatch();
    const { data , filteredData } = useAppSelector((state) => state.work);

    function handleWorkFilter(title: string): void {
        dispatch(setFilterData(''))
    }

    return (
        <Box id='work'>
            {/*Main content container*/}
            <Box data-id='work-content'>
                {/*Intro Work Text*/}
                <VividTextBuilder data={workConfig.workIntroText} defaultStyle={workStyle.workIntroMessage} highLightStyle={workStyle.workIntroHighlight} />
                {/*Work filter container*/}
                <Box data-id='work-filter-container' sx={workStyle.workFilterContainer}>
                    {work.workSkills.map((item) => (
                        <Box
                        key={item.id} 
                        onClick={() => handleWorkFilter(item.title)}
                        >
                            {item.title}
                        </Box>
                    ))}
                </Box>

                <Box data-id='motion-div-filterWork'>
                    {filteredData.map((work:any,index:any) => (
                        <Box>
                        <Box>
                            <Box component='img' src={urlFor(work.imgUrl)} alt={work.name}/>
                        </Box>
                    </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default Work
