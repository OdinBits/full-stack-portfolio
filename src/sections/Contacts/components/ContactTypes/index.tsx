import React from 'react'
import { useAppSelector } from '../../../../store';
import { Button, Stack } from '@mui/material';
import { ConstImages } from '../../../../shared/constants';
import './style.scss';

const ContactTypes: React.FC = () => {
    
    const { personData } = useAppSelector((state) => state.person);


    return (
        <Stack
            spacing={2}
            direction={{xs:'column',md:'row'}}
            id='contacts-types'
        >
            {/* <Box data-id='mobile' sx={style.contacts.mobile}>
                <Box component='img' src={images.mobile} alt='mobile' sx={style.contacts.img}/>
                <Box component='a' href={`tel:${phoneNubmer}`} sx={style.contacts.anchorTag}>@PhoneCall</Box>
            </Box>
           */}
            
            <Button className='email-container' sx={{textTransform:'none'}}>
                <img className='w-12' src={ConstImages.email} alt='email' />
                {personData.map((person:any) => (
                    <a className='text-lg text-gray-600' key={person.name} href={`mailto:${person.email}`}>@Mail</a>
                ))}
            </Button> 

        </Stack>
    )
}

export default ContactTypes
