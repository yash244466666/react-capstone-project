import { configureStore } from '@reduxjs/toolkit';
import countries from './countries';

const store = configureStore({
  reducer: {
    countriesData: countries,
  },
});

export default store;
