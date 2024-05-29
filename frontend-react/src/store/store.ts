import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import SLCAbout from './slices/SLCAbout';
import SLCSkill from './slices/SLCSkills';
import SLCNavigation from './slices/SLCNavigation';
import SLCWork from './slices/SLCWork';
import SLCTestimonial from './slices/SLCTestimonial';

const rootReducer = combineReducers({
    about : SLCAbout,
    navigation: SLCNavigation,
    work : SLCWork,
    skills : SLCSkill,
    testimonial: SLCTestimonial
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/REGISTER'],
            ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
            ignoredPaths: ['items.dates'],
        },
    }),
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;