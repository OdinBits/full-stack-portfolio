import { Box, Typography } from '@mui/material'
import { style } from './style'
import { AboutTypes } from '../../../../shared/types/AboutTypes'

const Info = () => {
    return (
        <Box sx={style.container}>
            <Box sx={style.content}>
                <Typography sx={style.title}> What is a full stack developer ? </Typography>
                <Typography sx={style.paragraph}>
                    {AboutTypes.themeText.secondParagraph}
                </Typography>
            </Box>
        </Box>
    )
}

export default Info
