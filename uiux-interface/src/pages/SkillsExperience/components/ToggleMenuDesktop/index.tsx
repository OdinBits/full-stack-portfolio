import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { style } from './style';
import { SkillsExperienceType } from '../../../../shared/types/SkillsExperienceTypes';
import { NavLink } from 'react-router-dom';
import { ISkillsExperience } from '../../../../shared/interfaces/ISkillsExperience';
import { useAppDispatch } from '../../../../store';
import { setNavLink } from '../../../../store/slices/navigationSlice';

const ToggleMenuDesktop: React.FC<ISkillsExperience.IActivePage> = ({ isActive }) => {
    const dispatch = useAppDispatch();
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

    useEffect(() => {
        const activeButton = document.querySelector('.nav-link.active button');
        if (activeButton) {
            const { left: buttonLeft, width: buttonWidth } = activeButton.getBoundingClientRect();
            const parent = activeButton.closest('.nav-link')?.parentElement;
            if (parent) {
                const { left: parentLeft } = parent.getBoundingClientRect();
                const x = buttonLeft - parentLeft;
                setIndicatorStyle({ left: x, width: buttonWidth });
            }
        }
    }, [isActive]);

    const handleNavLinkClick = (index: number) => {
        dispatch(setNavLink(index));
    };

    return (
        <Box id='responsive-navbar-container-box' component="nav" sx={style.container}>
            <Box sx={{ margin: '0px 10px', marginBottom: '50px', position: 'relative' }}>
                {SkillsExperienceType.routeMenu.map((item, index) => (
                    <NavLink
                        key={item?.id}
                        className={`nav-link ${isActive === index ? 'active' : ''}`}
                        onClick={() => handleNavLinkClick(index)}
                        to={item.path}
                        style={{margin:'5px'}}
                    >
                        <Button sx={style.buttons} id={`button-${item.id}`}>
                            <Typography sx={style.name}>{item?.name}</Typography>
                        </Button>
                    </NavLink>
                ))}
                <Box
                    className='indicator'
                    sx={{
                        backgroundColor: '#3c52b2',
                        height: '3px',
                        position: 'absolute',
                        bottom: 0,
                        left: indicatorStyle.left,
                        width: indicatorStyle.width,
                        transition: 'left 0.3s ease, width 0.3s ease',
                        zIndex: 1,
                        borderRadius: '20px',
                    }}
                />
            </Box>
        </Box>
    );
};

export default ToggleMenuDesktop;
