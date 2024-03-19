import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://auth-qa.qencode.com';

const setAuthHeader = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };
axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      refreshUser();
    }
    return Promise.reject(error);
  }
);

export const accessToken = createAsyncThunk(
  'auth/access-token',
  async (access_id, thunkAPI) => {
    try {
      const { data } = await axios.post('/v1/auth/access-token', access_id);
      setAuthHeader(data.access_token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk('auth/login', async (body, thunkAPI) => {
  try {
    const res = await axios.post('/v1/auth/login', body);
    setAuthHeader(res.access_token);
    return res;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      toast.error(
        'Fill in correct email or password or you are not authorized!',
        {
          duration: 4000,
          position: 'top-right',
        }
      );
    } else if (error.response && error.response.status === 422) {
      toast.error('Validation error!', {
        duration: 4000,
        position: 'top-right',
      });
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const forgotPassword = createAsyncThunk(
  'auth/forgot',
  async (email, thunkAPI) => {
    try {
      const res = await axios.post('/v1/auth/password-reset', {
        email,
        redirect_url: 'https://auth-qa.qencode.com/password-set',
      });
      toast.success('Verification email sent successfully', {
        duration: 3000,
        position: 'top-right',
      });
      return res;
    } catch (error) {
      if (error.response && error.response.status === 422) {
        toast.error('Validation error!', {
          duration: 4000,
          position: 'top-right',
        });
      } else if (error.response && error.response.status === 401) {
        toast.error('User with such email are not authorized!', {
          duration: 4000,
          position: 'top-right',
        });
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setNewPassword = createAsyncThunk(
  'auth/set',
  async (body, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.token;
    try {
      const res = await axios.post('/v1/auth/password-set', { ...body, token });
      setAuthHeader(res.access_token);
      return res;
    } catch (error) {
      toast.error('Error of reset', {
        duration: 4000,
        position: 'top-right',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.refreshToken;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      const res = await axios.get('/v1/auth/refresh-token', {
        refresh_token: persistedToken,
      });
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
