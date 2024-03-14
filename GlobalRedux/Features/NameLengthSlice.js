//YearSlice.jsx

"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

export const nameLengthSlice = createSlice({
    name: "nameLength",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmountLength: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmountLength } = nameLengthSlice.actions

export default nameLengthSlice.reducer;