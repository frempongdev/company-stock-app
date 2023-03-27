import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const profileBaseUrl = 'https://financialmodelingprep.com/api/v3/profile/';
const apikey = '?apikey=958d9faee6392a89d333869c614c50e6';

const initialState = {
  profile: [],
  isLoading: false,
};

export const fetchProfile = createAsyncThunk('countries/fetchProfile', async (companySymbol) => {
  const response = await fetch(`${profileBaseUrl}${companySymbol}${apikey}`);
  const data = response.json();
  return data;
});

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => ({ ...state, isLoading: true }));
  },
});

export default profileSlice.reducer;
