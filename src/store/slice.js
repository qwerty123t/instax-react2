import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        value: '',
    },
    reducers: {
        updateData: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { updateData } = dataSlice.actions;
export const selectData = (state) => state.data.value;
export default dataSlice.reducer;