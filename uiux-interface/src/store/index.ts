// Slices
import aboutSlice from './slices/aboutSlice';
import personSlice from './slices/personSlice';
import navigationSlice from './slices/navigationSlice';
import skillsSlice from './slices/skillsSlice';
import workSlice from './slices/workSlice';

// Thunks
import aboutThunk from './thunks/aboutThunk';
import fetchPersonData from './thunks/personThunk';
import skillsThunk from './thunks/skillsThunk';
import workThunk from './thunks/workThunk';

// Slices export 
export {
    aboutSlice,
    personSlice,
    navigationSlice,
    skillsSlice,
    workSlice
};

// Thunks export 

export {
    aboutThunk,
    fetchPersonData,
    skillsThunk,
    workThunk
}

export { useAppDispatch, useAppSelector } from '../hooks/useStoreRootState';
export { store, type RootState, type AppDispatch } from './store';

