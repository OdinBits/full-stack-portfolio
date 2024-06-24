import React from 'react';
import { Button, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store';
import { personThunk } from '../../store/thunks/personThunk';
import { urlFor } from '../../shared/config/clientConfig';
import './style.scss';

const Header: React.FC = () => {

  const dispatch = useAppDispatch();
  const { personData } = useAppSelector((state) => state.person);
  const [clickedSkill] = React.useState<number | null>(null);

  React.useEffect(() => {
    dispatch(personThunk())
  }, [dispatch])

  return (
    <section id='header'>
      {personData?.map((person: any) => (
        <div className='header-content-container' key={`person-${person.name}`}>
          <div className='text-container'>
            <div className='greet-info'>
              <Typography className='intro'>{person.intro}</Typography>
              <p className='description'>{person.description}</p>
              <Button component='a' href='#About' className='find-button'>
                FIND OUT MORE
              </Button>
            </div>
            <div className='person-img-container clip-hexagon'>
              <img className='person-img' src={urlFor(person.img)} alt={person.name} />
            </div>
          </div>
          <div className='skills-image-container'>
            {person?.skills?.map((skill: any,index: number) => (
              <a
                key={`skill-${index}`}
                className={`skill-link ${clickedSkill === index ? 'scale-1/5' : ''}`}
                href={skill.skillText}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img className='skills-img' src={urlFor(skill.skillImage)} alt={`Skill`} />
              </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Header;
