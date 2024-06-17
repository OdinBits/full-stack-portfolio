import React from 'react';
import { Button, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store';
import { personThunk } from '../../store/thunks/personThunk';
import { urlFor } from '../../shared/config/clientConfig';
import './style.scss';

const Header: React.FC = () => {

  const dispatch = useAppDispatch();

  const { personData } = useAppSelector((state) => state.person);

  React.useEffect(() => {
    dispatch(personThunk())
  }, [dispatch])

  return (
    <section id='header' className='header-container'>
      {personData?.map((items: any) => (
        <div className='header-content-container' key={`person-${items.name}`}>
          <div className='text-box-container'>
            <div className='greet-info'>
              <p className='intro'>{items.intro}</p>
              <p className='description'>{items.description}</p>
              <Button className='find-button'>
                FIND OUT MORE
              </Button>
            </div>
            <div className='person-img-container'>
              {/* <img className='person-img' src={urlFor(items.img)} alt={items.name} /> */}
            </div>
          </div>
          {/* <div className='skills-image-container'>
            {items?.skills?.map((skills: any) => (
              <img key={skills} src={urlFor(skills)} alt="skills" />
            ))}
          </div> */}
        </div>
      ))}
    </section>
  )
}

export default Header
