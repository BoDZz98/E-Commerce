import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    initData: [],
  },
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
    setData(state, action) {
      const data = action.payload;
      state.initData = data;
      // console.log("initdata is : ", state.initData);
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice;
