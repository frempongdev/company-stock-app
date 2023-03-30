import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    companies: [],
    isLoading: true,
}

const companiesSlice = createSlice({
    name: 'companies',
    initialState,
})

export default companiesSlice.reducer;
