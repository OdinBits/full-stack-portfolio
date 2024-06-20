import React from 'react'
import { ExperienceType } from '../../../../shared/types/ExperienceTypes'
import { Box, Button, MenuItem, Select } from '@mui/material'
import { IToggleOptions } from '../../../../shared/interfaces/IToggleOptions'
import './style.scss';

const ToggleOptions: React.FC<IToggleOptions.toggleProps> = ({
    isActive,
    handleNavLinkClick,
    indicatorStyle,
    selectedOption,
    handleSelectChange }) => {
    return (
        <div className='options-div-container' style={{ position: 'relative' }}>
            {ExperienceType.routeMenu.map((item, index) => (
                <Button
                    className={`option-buttons ${isActive === index ? 'active' : ''}`}
                    key={`items-${item.id}`}
                    onClick={handleNavLinkClick(index, item.name)}
                >
                    {item.name}
                </Button>
            ))}
            <Box
                id='indicator'
                sx={{
                    position: 'absolute',
                    left: `${indicatorStyle.left}px`,
                    width: `${indicatorStyle.width}px`,
                    height: '2px',
                    backgroundColor: '#5771c9',
                    transition: 'left 0.3s, width 0.3s',
                    marginTop: '60px',
                    borderRadius:'10px',
                    display: {xs:'none',md:'block'}
                }}
            />
            <Select
                className='option-selects'
                value={selectedOption}
                onChange={handleSelectChange}
            >
                {ExperienceType.routeMenu.map((option) => (
                    <MenuItem key={`options-${option.id}`} value={option.name}>
                        {option.name}
                    </MenuItem>
                ))}
            </Select>
        </div>
    )
}

export default ToggleOptions
