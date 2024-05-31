import { Box, Stack} from '@mui/material'
import style from '../style'
import { images } from '../../../shared/constants'

const Contacts = () => {
    return (
        <Stack
            spacing={2}
            direction={{xs:'column',md:'row'}}
            id='contacts'
            sx={style.contacts.container}
        >
            <Box data-id='mobile' sx={style.contacts.mobile}>
                <Box component='img' src={images.mobile} alt='mobile' sx={style.contacts.img}/>
                <Box component='a' href='tel: +91 (123) (123) (123) (9)' sx={style.contacts.anchorTag}>@PhoneCall</Box>
            </Box>
            
            <Box data-id='email' sx={style.contacts.email}>
                <Box component='img' src={images.email} alt='email' sx={style.contacts.img}/>
                <Box component='a' href='mailto:nishantchavan.dev@gmail.com' sx={style.contacts.anchorTag}>@Mail</Box>
            </Box>

        </Stack>
    )
}

export default Contacts
