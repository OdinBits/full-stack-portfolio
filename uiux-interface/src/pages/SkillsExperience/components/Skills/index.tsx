import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';
import { style } from './style';
import { SkillsExperienceType } from '../../../../shared/types/SkillsExperienceTypes';

const Skills: React.FC = () => {

  const skillPoints = SkillsExperienceType.skillHeaders
  
  console.log('Received skillPoints:', skillPoints);

  const validSkillPoints: any = Array.isArray(skillPoints) ? skillPoints : [];

  return (
    <Box id='Skills' sx={style.container}>
      {validSkillPoints.length > 0 ? (
        validSkillPoints.map((item: any, index: any) => (
          <Box data-id='content' sx={style.content} key={index}>
            <Box data-id='Roles' sx={style.rolesDiv}>
              <Typography sx={style.rolesTitle}>
                {item?.role}
              </Typography>
            </Box>
            <Box data-id='Roles data' sx={style.rolesDataContainer} >
              {item?.code?.map((codeItem: any, codeIndex: any) => (
                <Box sx={{ width: '100%' }} key={codeIndex}>
                  <Typography sx={style.codeItemTitle}>{codeItem?.title}</Typography>
                  <Box sx={style.rolesDataDiv}>

                    {codeItem.points.map((point: string, pointIndex: number) => (
                      <Typography key={pointIndex} sx={style.codePoints}>
                        {point.includes('(') && point.includes(')') ? (
                          <a style={{color:'#305c91',textDecoration:'none'}} href={point.substring(point.indexOf('(') + 1, point.indexOf(')'))} target="_blank" rel="noopener noreferrer">
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
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default Skills;
