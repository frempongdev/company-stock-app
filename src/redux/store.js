import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from './Companies/CompaniesSlice';
import profileReducer from './Profile/profileSlice';

const store = configureStore({
  reducer: {
    companies: companiesReducer,
    profile: profileReducer,
  },
});

export default store;
