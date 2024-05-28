import { createSlice } from "@reduxjs/toolkit";
import TNavbar from "../../shared/types/TNavbar";

const SLCNavigaiton = createSlice({
    name: 'navigation',
    initialState: TNavbar.ThunkState,
    reducers: {
        setActiveSection(state, action) {
            state.activePage = action.payload;
        },
    },
});

export const { setActiveSection } = SLCNavigaiton.actions;
export default SLCNavigaiton.reducer;