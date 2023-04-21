import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../constants';

export const getData = createAsyncThunk(
  'globals/getData',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`${API}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  },
);

const countrieslice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setData: (state, action) => ({
      ...state,
      countries: action.payload,
      isLoading: false,
    }),
    setError: (state, action) => ({
      ...state,
      error: action.payload,
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
  },
});

export const { setData } = countrieslice.actions;

export default countrieslice.reducer;
