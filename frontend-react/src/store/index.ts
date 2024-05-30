import  aboutSlice  from './slices/aboutSlice';
import navigationSlice from './slices/navigationSlice';
import skillsSlice from './slices/skillsSlice';
import testimonialSlice from './slices/testimonialSlice';
import workSlice from './slices/workSlice';

import aboutThunk from './thunks/aboutThunk';
import skillsThunk from './thunks/skillsThunk';
import testimonialThunk from './thunks/testimonialThunk';
import workThunk from './thunks/workThunk';


export { useAppDispatch, useAppSelector } from '../hooks/useStoreRootState';
export { store, type RootState, type AppDispatch } from './store';

export {
    aboutSlice,
    navigationSlice,
    skillsSlice,
    testimonialSlice,
    workSlice
};

export {
    aboutThunk,
    skillsThunk,
    testimonialThunk,
    workThunk
};