import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    initData: [],
  },
  reducers: {
    login(state, action) {
      state.isAuth = true;
    },
    logout(state, action) {
      state.isAuth = false;
    },
    setData(state, action) {
      const data = action.payload;
      state.initData = data;
      console.log("initdata is : ", state.initData);
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice;
