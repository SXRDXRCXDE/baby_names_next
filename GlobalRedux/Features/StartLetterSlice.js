"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     name: ''
};

export const startLetterSlice = createSlice({
    name: "startLetter",
    initialState,
    reducers: {
        setStartLetter: (state, action) => {
            return action.payload;
        },
    },
});

export const { setStartLetter } = startLetterSlice.actions;

export default startLetterSlice.reducer;
