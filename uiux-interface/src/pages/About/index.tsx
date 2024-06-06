import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import ThemeText from './components/ThemeText'
import Info from './components/Info'
import { useAppDispatch, useAppSelector } from '../../store'
import AbilityCard from './components/AbilityCard'
import aboutThunk from '../../store/thunks/aboutThunk'

const About = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(aboutThunk())
    },[dispatch])

    const { data } = useAppSelector((state) => state.about)

    return (
        <Box>
            <Box>
                <ThemeText/>
                <AbilityCard about={data}/>
                {/* <Info/> */}
            </Box>
        </Box>
    )
}

export default About
