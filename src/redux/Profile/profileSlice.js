import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const profileBaseUrl = 'https://financialmodelingprep.com/api/v3/profile/';
const apikey = '?apikey=d97b2f08a9a36a89179abfa4fb580330';

const initialState = {
  profile: {
    image: '',
    companyName: '',
    symbol: '',
    price: '',
    country: '',
    industry: '',
    description: '',
  },
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
      .addCase(fetchProfile.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(fetchProfile.fulfilled, (state, action) => (
        { ...state, profile: action.payload, isLoading: false }))
      .addCase(fetchProfile.rejected, (state) => ({ ...state, isLoading: false }));
  },
});

export default profileSlice.reducer;
