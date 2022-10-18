import { createSlice } from '@reduxjs/toolkit';

const initialState = {

}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        example: (state, action) => {

        },
    },
});

export const {example} = appSlice.actions;

export const selectEvery = (state) => state.app

export default appSlice.reducer;