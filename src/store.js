// store.js
import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './Redux/weatherSlice';
import weatherHourlyReducer from './Redux/weatherSlice';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    weatherHourly: weatherHourlyReducer,
  },
});

export default store;
