import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';
import { style } from './style';
import { SkillsExperienceType } from '../../../../shared/types/SkillsExperienceTypes';
import { useAppSelector } from '../../../../store';

const Skills: React.FC = () => {
  const { expData } = useAppSelector((state) => state.SkillsExp);

  const validSkillPoints: any = expData ? expData.skills : SkillsExperienceType.skillHeaders;

  const sortedSkillPoints = [...validSkillPoints].sort((a: any, b: any) => a.id.localeCompare(b.id));

  return (
    <Box id='Skills' sx={style.container}>
      {sortedSkillPoints.length > 0 ? (
        sortedSkillPoints.map((item: any) => (
          <Box data-id='content' sx={style.content} key={item?.id}>
            <Box data-id='Roles' sx={style.rolesDiv}>
              <Typography sx={style.rolesTitle}>
                {item?.role}
              </Typography>
            </Box>
            <Box data-id='Roles data' sx={style.rolesDataContainer}>
              {item?.code?.map((codeItem: any) => (
                <Box sx={{ width: '100%' }} key={`code-${codeItem?.title}`}>
                  <Typography sx={style.codeItemTitle}>{codeItem?.title}</Typography>
                  <Box sx={style.rolesDataDiv}>
                    {codeItem.points.map((point: string) => (
                      <Typography key={`code-points-${point}`} sx={style.codePoints}>
                        {point.includes('(') && point.includes(')') ? (
                          <a style={{ color: '#305c91', textDecoration: 'none' }} href={point.substring(point.indexOf('(') + 1, point.indexOf(')'))} target="_blank" rel="noopener noreferrer">
                            {point.substring(0, point.indexOf('('))}
                          </a>
                        ) : (
                          point
                        )}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        ))
      ) : (
        <Box sx={style.circleProgression}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default Skills;
