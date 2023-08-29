import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
  },
  reducers: {
    login(state, action) {
      state.isAuth = true;
    },
    logout(state, action) {
      state.isAuth = false;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice;
