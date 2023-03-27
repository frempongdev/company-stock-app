import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from './Companies/CompaniesSlice';

const store = configureStore({
  reducer: {
    companies: companiesReducer,
  },
});

export default store;
