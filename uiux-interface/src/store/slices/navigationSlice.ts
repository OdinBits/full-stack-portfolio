import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NavTypes } from "../../shared/types/NavTypes";

const navigationSlice = createSlice({
    name: 'navLinks',
    initialState: NavTypes.initialActiveLink,
    reducers: {
        setNavLink: (state, action: PayloadAction<number>) => {
            state.isActive = action.payload;
        },
        updateHistory: (state, action: PayloadAction<string>) => {
            state.history = [...(state.history || []), action.payload];
        },
        resetHistory: (state) => {
            state.history = [];
        },
        popHistory: (state) => {
            state.history.pop();
        },
        setActiveSection(state, action) {
            state.activePage = action.payload;
        },
    }
});

export const { setNavLink, updateHistory, resetHistory, popHistory,setActiveSection } = navigationSlice.actions;
export default navigationSlice.reducer;
