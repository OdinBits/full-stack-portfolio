import { Box, Typography } from '@mui/material'
import STYLHeader from './STYLHeader'
import { CFGHeader } from '../../shared/config/CFGHeader'

const Roles = () => {
    return (
        <Box data-id='intro-box' sx={STYLHeader.introBox}>
            {CFGHeader.headerText.roles.map((role) => (
                <Typography key={`header-text${role.id}`} sx={STYLHeader.introRoleText}>
                    {role.name}
                </Typography>
            ))}
        </Box>

    )
}

export default Roles
