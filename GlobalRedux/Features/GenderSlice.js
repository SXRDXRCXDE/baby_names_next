"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gender : ''
};

export const genderSlice = createSlice({
    name: "gender",
    initialState,
    reducers: {
        setGender: (state, action) => {
            return action.payload;
        },
    },
});

export const { setGender } = genderSlice.actions;

export default genderSlice.reducer;
