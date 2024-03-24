import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65facc873909a9a65b1b9181.mockapi.io';

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (limit, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts?page=1&limit=${limit}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
