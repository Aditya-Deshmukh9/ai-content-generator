import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isSiderBarOpen: false,
};

const SideBarSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        SideBarToggle(state, action: PayloadAction<boolean>) {
            state.isSiderBarOpen = action.payload
        }
    },

});

export const { SideBarToggle } = SideBarSlice.actions;
export default SideBarSlice.reducer;
