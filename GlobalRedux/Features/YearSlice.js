//YearSlice.jsx

"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

export const yearSlice = createSlice({
    name: "birthDate",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = yearSlice.actions

export default yearSlice.reducer;