import { configureStore } from "@reduxjs/toolkit";
import companiesReducer from './Companies/CompaniesSlice';


export const store = configureStore({
    reducer: {
        companies: companiesReducer,
    },
});