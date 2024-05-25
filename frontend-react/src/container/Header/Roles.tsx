import { Box, Typography } from '@mui/material'
import React from 'react'
import headerStyle from './HeaderStyle'
import { headerConfig } from '../../shared/config/Header'

const Roles = () => {
    return (
        <Box data-id='intro-box' sx={headerStyle.introBox}>
            {headerConfig.headerText.roles.map((role) => (
                <Typography key={`header-text${role.id}`} sx={headerStyle.introRoleText}>
                    {role.name}
                </Typography>
            ))}
        </Box>

    )
}

export default Roles
