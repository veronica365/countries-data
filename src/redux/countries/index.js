import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../constants';

const findItem = (id, countries) => countries.filter((country) => String(country.id) === id);
const searchItem = (param, countries) => countries.filter(
  (country) => String(country.id) === param
      || String(country.name).toLowerCase().includes(String(param).toLowerCase())
      || String(country.currency).toLowerCase().includes(String(param).toLowerCase())
      || String(country.capital).toLowerCase().includes(String(param).toLowerCase())
      || String(country.region).toLowerCase().includes(String(param).toLowerCase())
      || String(country.currency_name).toLowerCase().includes(String(param).toLowerCase())
      || String(country.subregion).toLowerCase().includes(String(param).toLowerCase()),
);

export const getData = createAsyncThunk('get', async (_, thunkAPI) => {
  try {
    const { countries } = thunkAPI.getState().countries;
    if (countries.length) return countries;
    const { data } = await axios.get(`${API}`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Something went wrong');
  }
});
export const findCountry = createAsyncThunk('find', async (id, thunkAPI) => {
  try {
    const { countries } = thunkAPI.getState().countries;
    if (countries.length) return findItem(id, countries);
    const { data } = await axios.get(`${API}`);
    return findItem(id, data);
  } catch (error) {
    return thunkAPI.rejectWithValue('Something went wrong');
  }
});
export const searchCountry = createAsyncThunk(
  'search',
  async (param, thunkAPI) => {
    try {
      const { countries } = thunkAPI.getState().countries;
      if (countries.length) return searchItem(param, countries);
      const { data } = await axios.get(`${API}`);
      return searchItem(param, data);
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  },
);

const countrieslice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    countriesBySearch: [],
    countryById: {},
    isLoading: false,
    error: null,
  },
  reducers: {
    setCountryById: (state, action) => ({
      ...state,
      countryById: action.payload,
      countriesBySearch: [],
      isLoading: false,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(getData.fulfilled, (state, action) => ({
      ...state,
      countries: action.payload,
      isLoading: false,
    }));
    builder.addCase(getData.rejected, (state, action) => ({
      ...state,
      error: action.payload,
      isLoading: false,
    }));
    builder.addCase(findCountry.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(findCountry.fulfilled, (state, action) => ({
      ...state,
      countryById: action.payload[0] || {},
      isLoading: false,
    }));
    builder.addCase(findCountry.rejected, (state, action) => ({
      ...state,
      error: action.payload,
      isLoading: false,
    }));
    builder.addCase(searchCountry.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(searchCountry.fulfilled, (state, action) => ({
      ...state,
      countriesBySearch: action.payload,
      isLoading: false,
    }));
    builder.addCase(searchCountry.rejected, (state, action) => ({
      ...state,
      error: action.payload,
      isLoading: false,
    }));
  },
});

export const { setCountryById } = countrieslice.actions;

export default countrieslice.reducer;
