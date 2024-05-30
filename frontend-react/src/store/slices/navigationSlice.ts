import { createSlice } from "@reduxjs/toolkit";
import NavbarTypes from "../../shared/types/NavbarTypes";

const navigationSlice = createSlice({
    name: 'navigation',
    initialState: NavbarTypes.ThunkState,
    reducers: {
        setActiveSection(state, action) {
            state.activePage = action.payload;
        },
    },
});

export const { setActiveSection } = navigationSlice.actions;
export default navigationSlice.reducer;