import { Box } from '@mui/material';
import { style } from './style';
import TextBox from './components/TextBox';
import Photo from './components/Photo';
import SkillsStrip from './components/SkillsStrip';

const Header = () => {

    return (
        <Box id='Header'>
            <TextBox />
            <SkillsStrip />
        </Box>
    )
}

export default Header
