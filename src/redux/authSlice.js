import { createSlice } from '@reduxjs/toolkit';

import {
  accessToken,
  forgotPassword,
  logIn,
  refreshUser,
  setNewPassword,
} from './authOperations';

const initialState = {
  token: null,
  refreshToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.token = payload.access_token;
        state.refreshToken = payload.refresh_token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, handleRejected)
      .addCase(logIn.pending, handlePending)
      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.token = payload.access_token;
        state.refreshToken = payload.refresh_token;
      })
      .addCase(refreshUser.rejected, handleRejected)
      .addCase(forgotPassword.pending, handlePending)
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(forgotPassword.rejected, handleRejected)
      .addCase(setNewPassword.pending, handlePending)
      .addCase(setNewPassword.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(setNewPassword.rejected, handleRejected)
      .addCase(accessToken.pending, handlePending)
      .addCase(accessToken.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.token = payload.access_token;
        state.refreshToken = payload.refresh_token;
        state.isLoggedIn = payload.access_token ? true : false;
      })
      .addCase(accessToken.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
