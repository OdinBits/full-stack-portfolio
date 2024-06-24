import aboutSlice from './slices/aboutSlice';
import navigationSlice from './slices/navigationSlice';
import personSlice from './slices/personSlice';
import skillsSlice from './slices/skillsSlice';
import submissionSlice from './slices/submissionSlice';
import workSlice from './slices/workSlice';


import aboutThunk from './thunks/aboutThunk';
import { personThunk } from './thunks/personThunk';
import skillsThunk from './thunks/skillsThunk';
import submissionThunk from './thunks/submissionThunk';
import workThunk from './thunks/workThunk';




export { useAppDispatch, useAppSelector } from '../hooks/useStoreRootState';
export { store, type RootState, type AppDispatch } from './store';


// slices
export {
    aboutSlice,
    navigationSlice,
    personSlice,
    submissionSlice,
    workSlice,
    skillsSlice
};

// thunks
export {
    aboutThunk,
    personThunk,
    skillsThunk,
    submissionThunk,
    workThunk
};