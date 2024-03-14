//store.jsx

"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";

import startLetterSlice from "./Features/StartLetterSlice";
import endLetterSlice from "./Features/EndLetterSlice";
import yearSlice from "./Features/YearSlice";
import PopularSlice from "./Features/PopularSlice";
import genderSlice from "./Features/GenderSlice";
import nameLengthSlice from "./Features/NameLengthSlice";
import filterChangeSlice from "./Features/FilterChangeSlice";


const rootReducer = combineReducers({
    birthDate: yearSlice,
    startLetter: startLetterSlice,
    endLetter: endLetterSlice,
    popular: PopularSlice,
    gender: genderSlice,
    nameLength : nameLengthSlice,
    filterChange : filterChangeSlice
    //add all your reducers here
},);

export const store = configureStore({
    reducer: rootReducer,

});
