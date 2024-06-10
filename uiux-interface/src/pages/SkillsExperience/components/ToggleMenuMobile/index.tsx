import { Box, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react';
import { SkillsExperienceType } from '../../../../shared/types/SkillsExperienceTypes';
import { style } from './style';
import { ISkillsExperience } from '../../../../shared/interfaces/ISkillsExperience';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../store';
import { setNavLink } from '../../../../store/slices/navigationSlice';

const ToggleMenuMobile: React.FC<ISkillsExperience.IActivePage> = ({ isActive }) => {
  const [selectedValue, setSelectedValue] = useState(SkillsExperienceType.routeMenu[0]?.path || '');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleNavLinkClick = (index: number, path: string) => {
    dispatch(setNavLink(index));
    navigate(path);
  };

  const handleChange = (event: SelectChangeEvent<string>) => {
    const path = event.target.value as string;
    setSelectedValue(path);
    const index = SkillsExperienceType.routeMenu.findIndex(item => item.path === path);
    handleNavLinkClick(index, path);
  };

  return (
    <Box>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={selectedValue}
        displayEmpty
        sx={style.container}
        onChange={handleChange}
      >
        {SkillsExperienceType.routeMenu.map((item: any) => (
          <MenuItem key={item.id} value={item.path}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default ToggleMenuMobile;
