import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import personSlice from './slices/personSlice';
import aboutSlice from './slices/aboutSlice';
import navigationSlice from './slices/navigationSlice';
import skillsSlice from './slices/skillsSlice';

const rootReducer = combineReducers({
    person: personSlice,
    about : aboutSlice,
    navLinkStates: navigationSlice,
    SkillsExp: skillsSlice
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