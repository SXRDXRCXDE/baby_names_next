"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name :''
};

export const endLetterSlice = createSlice({
    name: "endLetter",
    initialState,
    reducers: {
        setEndLetter: (state, action) => {
            return action.payload;
        },
    },
});

export const { setEndLetter } = endLetterSlice.actions;

export default endLetterSlice.reducer;
