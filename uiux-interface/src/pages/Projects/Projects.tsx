import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useAppDispatch, useAppSelector, workThunk } from '../../store';
import { setActiveSection } from '../../store/slices/navigationSlice';
import { NavTypes } from '../../shared/types/NavTypes';
import { ProjectTypes } from '../../shared/types/ProjectTypes';
import { style } from './style';
import { urlFor } from '../../shared/config/clientConfig';
import AppWrap from '../../wrapper/AppWrap';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { GitHub } from '@mui/icons-material';

const Projects: React.FC = () => {
    const { ref, inView } = useInView({
        threshold: 0.6,
    });
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        dispatch(workThunk());

        if (inView) {
            dispatch(setActiveSection(NavTypes.navItems[2].name));
        }
    }, [dispatch, inView]);

    const { projData } = useAppSelector((state) => state.project);

    const validData = projData?.works || ProjectTypes?.projectSkillsDefault;

    return (
        <Box ref={ref} id='PROJECTS' sx={style.container}>
            {/* Content */}
            <Box data-id='content' sx={style.content}>
                {/* Title */}
                <Typography sx={style.titleTheme}> Projects </Typography>
                {validData?.map((item: any) => (
                    <Box key={`projects-${item?.title}`} sx={style.contentBox}>
                        {/* Image Container */}
                        <Box data-id='img-container' sx={style.imgContainer}>
                            <Box 
                                component='img' 
                                alt={item?.title} 
                                src={urlFor(item?.imgUrl)} 
                                sx={{
                                    ...style.img, 
                                    filter: item?.isConfidential ? 'blur(15px)' : 'none'
                                }}
                            />
                            {item?.isConfidential && (
                                <Box sx={style.confidentialOverlay}>
                                    <Typography sx={style.confidentialText}> Confidential Project </Typography>
                                </Box>
                            )}
                        </Box>
                        {/* Description container */}
                        <Stack spacing={4} data-id='description-container' sx={style.descContainer}>
                            {/* Title */}
                            <Typography sx={style.title}>{item?.title}</Typography>
                            {/* Description */}
                            <Typography sx={style.description}>{item?.description}</Typography>
                            {/* Development Tools Container */}
                            <Stack data-id='dev-tools-box' sx={style.devToolsBox}>
                                {/* Title */}
                                <Box data-id='dev-tools-title'>
                                    <Typography sx={style.devToolsTitle}> DEVELOPMENT TOOLS : </Typography>
                                </Box>
                                {/* Points Box */}
                                <Box component='ul' data-id='point-box' sx={style.pointsBox}>
                                    {item?.bulletPoints?.map((points: any) => (
                                        <Typography component='li' key={`points-${points}`} sx={style.points}>{points}</Typography>
                                    ))}
                                </Box>
                                {!item?.isConfidential && (
                                    <Typography component='a' href={item?.codeLink} sx={style.codeLink}>Go to Code...</Typography>
                                )}
                            </Stack>
                        </Stack>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default AppWrap({ Component: Projects, idName: 'PROJECTS' });
