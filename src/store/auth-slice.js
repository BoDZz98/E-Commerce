import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    initData: [],
    reviews: [],
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
    createReview(state, action) {
      const data = action.payload;
      state.reviews.push(data);
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice;
