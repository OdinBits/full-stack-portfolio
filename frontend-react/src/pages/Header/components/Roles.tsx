import { Typography } from '@mui/material'
import style from '../style'
import MotionBox from '../../../components/MotionBox'
import { headerConfig } from '../../../shared/config/headerConfig'


const Roles = () => {
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
            {headerConfig.headerText.roles.map((role) => (
                <Typography key={`header-text${role.id}`} sx={style.introRoleText}>
                    {role.name}
                </Typography>
            ))}
        </MotionBox>


    )
}

export default Roles
