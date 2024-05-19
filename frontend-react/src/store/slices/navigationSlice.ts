import { createSlice } from "@reduxjs/toolkit";
import navAttributes from "../../shared/types/Navbar";

const navigationSlice = createSlice({
    name: 'navigation',
    initialState: navAttributes.initialState,
    reducers: {
        setActiveSection(state, action) {
            state.activePage = action.payload;
        },
    },
});

export const { setActiveSection } = navigationSlice.actions;
export default navigationSlice.reducer;