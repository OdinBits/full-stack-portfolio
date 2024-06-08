import { Box, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import { SkillsExperienceType } from '../../../../shared/types/SkillsExperienceTypes';
import { style } from './style';
import { ISkillsExperience } from '../../../../shared/interfaces/ISkillsExperience';

const ToggleMenuMobile: React.FC<ISkillsExperience.IActivePage> = ({isActive}) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedValue(event.target.value as string);
  };

  return (
    <Box>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={selectedValue}
        placeholder={SkillsExperienceType.routeMenu[0]?.name}
        sx={style.container}
        // onChange={handleChange}
      >
        {SkillsExperienceType.routeMenu.map((item, index) => (
          <MenuItem key={item.id} value={item.name}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default ToggleMenuMobile;
