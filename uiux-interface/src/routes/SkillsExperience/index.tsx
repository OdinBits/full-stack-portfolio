import React, { useRef, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { SkillsExperienceType } from '../../shared/types/SkillsExperienceTypes';
import { Box } from '@mui/material';

const SkillsExperienceRoutes = () => {
  const location = useLocation();
  const routeContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        routeContainerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.inOut' }
      );
    }, routeContainerRef);

    return () => ctx.revert(); 
  }, [location]);

  return (
    <Box ref={routeContainerRef} >
      <Routes location={location}>
        {SkillsExperienceType.routeMenu.map(({ id, path, element: Component }) => (
          <Route key={id} path={path} element={<Component />} />
        ))}
      </Routes>
    </Box>
  );
}

export default SkillsExperienceRoutes;
