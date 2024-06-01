import { Typography } from '@mui/material';
import style from '../style';
import MotionBox from '../../../components/MotionBox';
import { IHeader } from '../../../shared/interfaces/IHeader';


const Roles: React.FC<IHeader.role> = ({text}) => {
    return (
        <MotionBox
            data-id='intro-box'
            sx={style.introBox}
            motionProps={{
                initial: { opacity: 0, scale: 0 }, 
                animate: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 20 } },
                transition: { duration: 0.5 }
            }}
        >
                <Typography  sx={style.introRoleText}>
                    {text}
                </Typography>
        </MotionBox>


    )
}

export default Roles
