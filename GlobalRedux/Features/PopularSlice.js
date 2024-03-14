"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sort : 'Popular'
};

export const popularSlice = createSlice({
    name: "popular",
    initialState,
    reducers: {
        setPopular: (state, action) => {
            return action.payload;
        },
    },
});

export const { setPopular } = popularSlice.actions;

export default popularSlice.reducer;
