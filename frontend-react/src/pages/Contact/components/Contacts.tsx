import { Box, Stack} from '@mui/material'
import style from '../style'
import { images } from '../../../shared/constants'
import { IContact } from '../../../shared/interfaces/IContact'

const Contacts: React.FC<IContact.contacts> = ({phoneNumber,mailAddress}) => {
    return (
        <Stack
            spacing={2}
            direction={{xs:'column',md:'row'}}
            id='contacts'
            sx={style.contacts.container}
        >
            <Box data-id='mobile' sx={style.contacts.mobile}>
                <Box component='img' src={images.mobile} alt='mobile' sx={style.contacts.img}/>
                <Box component='a' href={`tel:${String(phoneNumber)}`} sx={style.contacts.anchorTag}>@PhoneCall</Box>
            </Box>
            
            <Box data-id='email' sx={style.contacts.email}>
                <Box component='img' src={images.email} alt='email' sx={style.contacts.img}/>
                <Box component='a' href={`mailto:${ String(mailAddress)}`} sx={style.contacts.anchorTag}>@Mail</Box>
            </Box>

        </Stack>
    )
}

export default Contacts
