import { Box } from '@mui/material';
import workStyle from './WorkStyle';
import { workConfig } from '../../shared/config/Work';
import VividTextBuilder from '../../components/TextBuilder/VividTextBuilder';
import WorkItems from './WorkItems';
import Filter from './Filter';
import { AppWrap } from '../../wrapper';

const Work = () => {

    return (
        <Box id='WORK' sx={workStyle.workContainer}>
            {/*Main content container*/}
            <Box data-id='work-content' sx={workStyle.workContent}>
                {/*Intro Work Text*/}
                <VividTextBuilder data={workConfig.workIntroText} defaultStyle={workStyle.workIntro.workIntroMessage} highLightStyle={workStyle.workIntro.workIntroHighlight} />
                {/*Work skills container*/}
                <Filter/>
                {/*Work filter container*/}
                <WorkItems/>
            </Box>
        </Box>
    )
}

export default AppWrap({ Component: Work, idName: 'WORK', showCopyright:false});