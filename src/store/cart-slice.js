import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalCartPrice: 0,
    changed: false,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;

      const exisitingItem = state.items.find((item) => item.id === newItem.id);
      state.totalCartPrice += newItem.price * newItem.quantity;
      state.changed = true;

      if (!exisitingItem) {
        state.totalQuantity += 1;
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.price * newItem.quantity,
          name: newItem.title,
          image: newItem.image,
        });
      } else {
        exisitingItem.quantity += 1;
        exisitingItem.totalPrice = exisitingItem.totalPrice + newItem.price;
      }
    },
    removeItemfromCart(state, action) {
      const id = action.payload.id;
      const price = action.payload.price;

      state.changed = true;
      state.totalCartPrice -= price;
      const exisitingItem = state.items.find((item) => item.id === id);

      if (exisitingItem.quantity === 1) {
        state.totalQuantity -= 1;
        // The filter function , remain the item if it returned true
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        exisitingItem.quantity -= 1;
        exisitingItem.totalPrice -= exisitingItem.price;
      }
    },
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    deleteItemFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
