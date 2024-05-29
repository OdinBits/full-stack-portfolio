import { Box, Typography } from '@mui/material'
import STYLHeader from './STYLHeader'
import { CFGHeader } from '../../shared/config/CFGHeader'
import COMPMotionBox from '../../components/Tools/COMPMotionBox'

const Roles = () => {
    return (
        <COMPMotionBox
            data-id='intro-box'
            sx={STYLHeader.introBox}
            motionProps={{
                initial: { opacity: 0, scale: 0 }, // Initial opacity and scale
                animate: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 20 } }, // Animation when component mounts with spring animation
                transition: { duration: 0.5 } // Animation duration
            }}
        >
            {CFGHeader.headerText.roles.map((role) => (
                <Typography
                    key={`header-text${role.id}`}
                    sx={STYLHeader.introRoleText}
                >
                    {role.name}
                </Typography>
            ))}
        </COMPMotionBox>


    )
}

export default Roles
