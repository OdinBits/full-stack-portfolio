import { Button, Typography } from '@mui/material'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { personThunk } from '../../store/thunks/personThunk';
import { urlFor } from '../../shared/config/clientConfig';

const Header = () => {

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(personThunk())
  }, [dispatch])

  const { personData } = useAppSelector((state) => state.person);

  return (
    <section id='header'>
      {personData.map((items: any) => (
        <div className='header-content-container' key={`person-${items.name}`}>

          <div className='text-box-container'>
            <div className='greet-info'>
              <p className='intro'>{items.intro}</p>
              <p className='description'>{items.description}</p>
              <Button className='find-button'>
                FIND OUT MORE
              </Button>
            </div>
            <div className='person-photo'>
              <img src={urlFor(items.image)} alt={items.name} />
            </div>
          </div>


          <div className='skills-image-container'>
            {items.skills.map((skills: any) => (
              <img key={skills} src={urlFor(skills)} alt="skills" />
            ))}
          </div>

        </div>

      ))}
    </section>
  )
}

export default Header
