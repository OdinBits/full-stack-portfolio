import { Route, Routes } from 'react-router-dom';
import { SkillsExperienceType } from '../../shared/types/SkillsExperienceTypes';

const SkillsExperienceRoutes = () => {
  return (
    <Routes>
        {SkillsExperienceType.routeMenu.map(({id, path, element: Component}) => (
          <Route key={id} path={path} element={<Component/>} />
        ))}
    </Routes>
  )
}

export default SkillsExperienceRoutes
