import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import countryReducer from '../countries';

const store = configureStore({
  reducer: {
    countries: countryReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
