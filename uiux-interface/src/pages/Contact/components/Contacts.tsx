import { Box, Stack} from '@mui/material'
import style from '../style'
import { ConstImg } from '../../../shared/constants/image';
// import { images } from '../../../shared/constants'


const Contacts: React.FC = () => {

    const email = process.env.REACT_APP_EMAIL

    return (
        <Stack
            spacing={2}
            direction={{xs:'column',md:'row'}}
            id='contacts'
            sx={style.contacts.container}
        >
            {/* <Box data-id='mobile' sx={style.contacts.mobile}>
                <Box component='img' src={images.mobile} alt='mobile' sx={style.contacts.img}/>
                <Box component='a' href={`tel:${phoneNubmer}`} sx={style.contacts.anchorTag}>@PhoneCall</Box>
            </Box>
           */}
            
            <Box data-id='email' sx={style.contacts.email}>
                <Box component='img' src={ConstImg.email} alt='email' sx={style.contacts.img}/>
                <Box component='a' href={`mailto:${email}`} sx={style.contacts.anchorTag}>@Mail</Box>
            </Box> 
        </Stack>
    )
}

export default Contacts
