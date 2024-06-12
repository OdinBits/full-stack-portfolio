import { Box } from '@mui/material';
import TextBox from './components/TextBox';
import SkillsStrip from './components/SkillsStrip';

const Header: React.FC = () => {

    return (
        <Box id='Header'>
            <TextBox />
            <SkillsStrip />
        </Box>
    )
}

export default Header
