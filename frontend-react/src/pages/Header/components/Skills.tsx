import { Box } from '@mui/material';
import style from '../style';
import MotionBox from '../../../components/MotionBox';
import { HeaderTypes } from '../../../shared/types/HeaderTypes';

const Skills = () => {
    return (
        <Box id='skills-container' sx={style.skillsContainer}>
            {/* Content */}
            {HeaderTypes.map((skill) => (
                <MotionBox
                    data-id={`skill-item-${skill.id}`}
                    key={`skill-${skill.id}`}
                    sx={{
                        ...style.skillItem,
                        width: skill.weight,
                        height: skill.height
                    }}
                    motionProps={{
                        initial: { opacity: 0, y: -20, scale: 0, backgroundColor: 'transparent' },
                        animate: { opacity: 1, y: 0, scale: 1, backgroundColor: 'white', borderRadius: '50%', width: '100%', height: '100%' },
                        exit: { opacity: 0, scale: 0 },
                        transition: {
                            delay: 1.5,
                            type: 'spring',
                            stiffness: 400,
                            damping: 20,
                            duration: 1.5
                        }
                    }}
                >
                    {/* Skill Items */}
                    <Box
                        data-id={`skill-item-image-${skill.id}`}
                        component='img'
                        src={skill.imgUrl}
                        alt={skill.title}
                        sx={style.skillItemImage}
                    />
                </MotionBox>

            ))}
        </Box>
    );
};

export default Skills;
