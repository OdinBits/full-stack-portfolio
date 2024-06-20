import { CircularProgress, Typography } from '@mui/material';
import { useAppSelector } from '../../../../store';
import './style.scss';
import { ExperienceType } from '../../../../shared/types/ExperienceTypes';

const Skills: React.FC = () => {

  const { expData } = useAppSelector((state) => state.skillsExp);

  const validSkillPoints: any = expData ? expData.skills : ExperienceType.skillHeaders;

  const sortedSkillPoints = [...validSkillPoints].sort((a: any, b: any) => a.id.localeCompare(b.id));
  
  return (
    <div id='Skills' className='skills-container'>
      {sortedSkillPoints.length > 0 ? (
        sortedSkillPoints.map((item: any) => (
          <div className='skills-content' key={item?.id}>
            <div className='roles'>
              <Typography className='role-block'>
                {item?.role}
              </Typography>
            </div>
            <div className='roles-data'>
              {item?.code?.map((codeItem: any) => (
                <div className='tech-container' key={`code-${codeItem?.title}`}>
                  <Typography className='tech-title'>{codeItem?.title}</Typography>
                  <div className='flex gap-2 flex-wrap'>
                    {codeItem.points.map((point: string) => (
                      <Typography key={`code-points-${point}`} className='code-points'>
                        {point.includes('(') && point.includes(')') ? (
                          <a style={{ color: '#305c91', textDecoration: 'none' }} href={point.substring(point.indexOf('(') + 1, point.indexOf(')'))} target="_blank" rel="noopener noreferrer">
                            {point.substring(0, point.indexOf('('))}                            
                          </a>
                        ) : (
                          point                           
                        )}
                      </Typography>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        
          <CircularProgress />
        
      )}
    </div>
  )
}

export default Skills
