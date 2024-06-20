import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { useInView } from 'react-intersection-observer';
import { setActiveSection, setNavLink } from '../../store/slices/navigationSlice';
import experienceThunk from '../../store/thunks/skillsThunk';
import { ExperienceType } from '../../shared/types/ExperienceTypes';
import { SelectChangeEvent } from '@mui/material';
import ToggleOptions from './components/ToggleOptions';
import './style.scss';

const Experience: React.FC = () => {
    const { ref, inView } = useInView({
        threshold: 0.6,
    });

    const dispatch = useAppDispatch();
    const { isActive } = useAppSelector(state => state.navlinks);

    // Set default selected option based on the first item in routeMenu
    const defaultOption = ExperienceType.routeMenu[0]?.name || '';
    const [selectedOption, setSelectedOption] = useState(defaultOption);

    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, top: 0 });

    useEffect(() => {
        const updateIndicatorStyle = () => {
            const activeButton = document.querySelector('.option-buttons.active');
            if (activeButton) {
                const { left: buttonLeft, width: buttonWidth, height: buttonHeight } = activeButton.getBoundingClientRect();
                const parent = activeButton.closest('.options-div-container');
                if (parent) {
                    const { left: parentLeft } = parent.getBoundingClientRect();
                    const x = buttonLeft - parentLeft;
                    const y = buttonHeight;
                    setIndicatorStyle({ left: x, width: buttonWidth, top: y });
                }
            }
        };

        updateIndicatorStyle();
        dispatch(experienceThunk());

        window.addEventListener('resize', updateIndicatorStyle);
        return () => window.removeEventListener('resize', updateIndicatorStyle);
    }, [isActive, dispatch]);

    useEffect(() => {
        if (ExperienceType.routeMenu.length > 0) {
            const firstItem = ExperienceType.routeMenu[0];
            dispatch(setNavLink(0));
            dispatch(setActiveSection(firstItem.name));
        }
    }, [dispatch]);

    const handleNavLinkClick = (index: number, name: string) => () => {
        dispatch(setNavLink(index));
        dispatch(setActiveSection(name));
        setSelectedOption(name);
    };

    const handleSelectChange = (event: SelectChangeEvent<string>) => {
        const selectedName = event.target.value;
        setSelectedOption(selectedName);
        const index = ExperienceType.routeMenu.findIndex(option => option.name === selectedName);
        dispatch(setNavLink(index));
        dispatch(setActiveSection(selectedName));
    };

    const renderContent = () => {
        const selectedOptionObject = ExperienceType.routeMenu.find(option => option.name === selectedOption);
        if (selectedOptionObject) {
            const Component = selectedOptionObject.component;
            return <Component />;
        }
        return null;
    };

    return (
        <section ref={ref} id='Experience' className='exp-container'>
            <ToggleOptions
                isActive={isActive}
                handleNavLinkClick={handleNavLinkClick}
                indicatorStyle={indicatorStyle}
                selectedOption={selectedOption}
                handleSelectChange={handleSelectChange}
            />

            <div className='content-div'>
                {renderContent()}
            </div>
        </section>
    );
};

export default Experience;
