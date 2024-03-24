import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://65facc873909a9a65b1b9181.mockapi.io';

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (limit, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts?page=1&limit=${limit}`);
      return response.data;
    } catch (e) {
      toast.error('Something is going wrong');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
