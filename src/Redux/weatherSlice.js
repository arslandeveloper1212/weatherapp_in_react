import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

export const fetchWeather = createAsyncThunk('weather/fetchWeather', async () => {
  try {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=rawalpindi&appid={apikey}');
    const data = await response.json();
    return data;
  } catch (error) {
    throw Error('Error fetching weather data');
  }
});


// hourly weather is paid api .
export const fetchHourlyWeather = createAsyncThunk('weather/fetchHourlyWeather', async () => {
  try {
    const response = await fetch('https://pro.openweathermap.org/data/2.5/forecast/hourly?q=rawalpindi&appid={apikey}');
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw Error('Error fetching weather hourly data');
  }
 
});

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

const weatherHourlySlice = createSlice({
  name: 'weatherHourly',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHourlyWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHourlyWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchHourlyWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

const rootReducer = combineReducers({
  weather: weatherSlice.reducer,
  weatherHourly: weatherHourlySlice.reducer,
});

export default rootReducer;
