import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://financialmodelingprep.com/api/v3/stock-screener?priceMoreThan=800&apikey=958d9faee6392a89d333869c614c50e6';

const initialState = {
  companies: [],
  isLoading: true,
  error: '',
};

export const fetchCompanies = createAsyncThunk('companies/fetchCompanies', async () => {
  const response = await fetch(url);
  const data = response.json();
  // console.log('nice', data);
  return data;
});

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(fetchCompanies.fulfilled, (state, action) => (
        { ...state, isLoading: false, companies: action.payload }))
      .addCase(fetchCompanies.rejected, (state) => ({ ...state, isLoading: false, error: 'company fetch was not successful' }));
  },
});

export default companiesSlice.reducer;
