import React from 'react';
import { Button, Collapse, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../../store';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { urlFor } from '../../../../shared/config/clientConfig';
import experienceThunk from '../../../../store/thunks/skillsThunk';
import { formatDate } from '../../../../utils/formateDate';
import './style.scss';




const mainContent = ({ expData }: any) => {
  return (
    <div className='data-container'>
      <Typography className='exp-title'>{expData.title}</Typography>
      <Typography className='exp-date'>{formatDate(expData.startDate)} to {formatDate(expData.endDate)}</Typography>
      {expData.detailDesc ? (
        <div className='exp-ul'>
          {expData.detailDesc.map((desc: any) => (
            <ul className='li-container' key={`desc-${desc.subTitle}`}>
              <Typography className='li-subTitle'>{desc.subTitle}</Typography>
              {desc.points.map((point: any) => (
                <li className='exp-list' key={`desc-point-${point}`}>
                  <Typography variant="subtitle1">
                    {point}
                  </Typography>
                </li>
              ))}
            </ul>
          ))}
        </div>
      ) : (
        <Typography className='description'>
          {expData.detailDesc?.points}
        </Typography>
      )}
      <div className='devtools-container'>
        <Typography variant='h5' className='py-2'>Development Tools:</Typography>
        {expData.developmentTools?.map((tools: any) => (
          <Typography className='p-2 m-2 bg-coral-blue' key={`tools-${tools}`}>{tools}</Typography>
        ))}
      </div>
    </div>
  );
};

const ExperienceResponsive: React.FC = () => {
  const dispatch = useAppDispatch();
  const { expData, expError } = useAppSelector((state) => state.skillsExp);
  const [selectedExp, setSelectedExp] = React.useState<boolean[]>([]);

  React.useEffect(() => {
    dispatch(experienceThunk());
  }, [dispatch]);

  React.useEffect(() => {
    if (expData.experiences) {
      setSelectedExp(expData.experiences.map((_: any, index: number) => index === 0));
    }
  }, [expData]);

  const handleImageClick = (index: number) => {
    setSelectedExp((prevSelectedExp) => {
      const newSelectedExp = [...prevSelectedExp];
      newSelectedExp[index] = !newSelectedExp[index];
      return newSelectedExp;
    });
  };

  if (expError) {
    return <Typography className="error-message">Error loading data: {expError}</Typography>;
  }

  if (!expData.experiences) {
    return <Typography className="loading-message">Loading...</Typography>;
  }

  return (
    <div className='responsive-container'>
      {expData.experiences.map((items: any, index: number) => (
        <div key={`exp-${items.title}`}>
          {/* Large Devices */}
          <div className='desktop-view'>
            <div className='desktop-options-container'>
              <Button className='desktop-button-img'>
                <img className='company-img-desktop' src={urlFor(items.img)} alt={items.title} />
              </Button>
              <div className={`desktop-indicator ${selectedExp ? 'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%' : 'transparent'}`}></div>
            </div>
            {mainContent({ expData: items })}
          </div>
          {/* Xtra small Devices */}
          <div className='mobile-view'>
            <Button
              aria-controls={`custom-dropdown-menu-${index}`}
              aria-haspopup="true"
              onClick={() => handleImageClick(index)}
              className='mobile-button'
            >
              <img className='company-img-mobile' src={urlFor(items.img)} alt={items.title} />
              <ArrowDropDownIcon sx={{fontSize:'34px',marginRight:'10px'}}/>
            </Button>
            <Collapse in={selectedExp[index]} timeout="auto" unmountOnExit>
              {mainContent({ expData: items })}
            </Collapse>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceResponsive;
