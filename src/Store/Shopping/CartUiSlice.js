import { createSlice } from "@reduxjs/toolkit";

const cartUi = createSlice({
  name: "cartUi",
  initialState: { cartIsVisible: false },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const cartUiAction = cartUi.actions;
export default cartUi;
